Component({
    properties: {
        config: {
            type: Object,
            value: {},
        },
        preload: {  // 是否预下载图片资源
            type: Boolean,
            value: false,
        },
        hideLoading: {  // 是否隐藏loading
            type: Boolean,
            value: false,
        }
    },
    ready() {
        if (this.data.preload) {
            const poster = this.selectComponent('#poster');
            this.downloadStatus = 'doing';
            poster.downloadResource(this.data.config).then(() => {
                this.downloadStatus = 'success';
                this.trigger('downloadSuccess');
            }).catch((e) => {
                this.downloadStatus = 'fail';
                this.trigger('downloadFail', e);
            });
        }
        this.setData({
          isCreating: 0, //1为正在创建 防止重复点击 防止在生成过程中重复点击生成
        })
    },
    methods: {
        trigger(event, data) {
            if (this.listener && typeof this.listener[event] === 'function') {
                this.listener[event](data);
            }
        },
        once(event, fun) {
            if (typeof this.listener === 'undefined') {
                this.listener = {};
            }
            this.listener[event] = fun;
        },
        downloadResource(reset) {
            return new Promise((resolve, reject) => {
                if (reset) {
                    this.downloadStatus = null;
                }
                const poster = this.selectComponent('#poster');
                if (this.downloadStatus && this.downloadStatus !== 'fail') {
                    if (this.downloadStatus === 'success') {
                        resolve();
                    } else {
                        this.once('downloadSuccess', () => resolve());
                        this.once('downloadFail', (e) => reject(e));
                    }
                } else {
                    poster.downloadResource(this.data.config)
                        .then(() => {
                            this.downloadStatus = 'success';
                            resolve();
                        })
                        .catch((e) => reject(e));
                }  
            })
        },
        onCreate(reset = false) {
          this.checkSetting();
        },
      // 自定义修改 检查用户是否授权
      checkSetting: function () {
        let that = this;
        //是否授权
        wx.getSetting({
          success: function (res) {
            let writePhotosAlbum = res.authSetting["scope.writePhotosAlbum"];
            if (writePhotosAlbum) {
              //已授权
              that.creatPic();
            } else if (writePhotosAlbum != undefined && writePhotosAlbum != true) {
              //关闭分享弹窗
              that.triggerEvent('close');
              //拒绝授权了
              wx.showModal({
                title: '',
                content: '您还未授权保存图片到相册，请确认授权',
                showCancel: true,
                cancelText: '取消',
                confirmText: '确认',
                success: function (e) {
                  //点了查看规则
                  if (e.confirm) {
                    //针对用户保存图片的时候可能会拒绝授权，再次点击时需要调起授权窗口
                    that.openSetting();
                  } else {
                    //取消
                  }
                }
              })
            } else {
              that.creatPic();
            }
          }
        })
      },
      // 自定义修改 未授权重新调起授权弹窗
      openSetting: function () {
        let that = this;
        //调起授权弹窗
        wx.openSetting({
          success(res) {
            //同意授权
            if (res.authSetting["scope.writePhotosAlbum"]) {
              that.creatPic();
            }
          }
        });
      },
      //自定义修改 分离出生成图片方法
      creatPic: function () {
        //正在生成
        let that = this;
        if (that.data.isCreating) {
          wx.showToast({
            title: '图片正在生成中，请稍后再试',
            icon: 'none'
          })
          return;
        }
        that.setData({
          isCreating: 1
        });
        !that.data.hideLoading && wx.showLoading({ mask: true, title: '正在生成图片...' });
        return that.downloadResource(typeof reset === 'boolean' && reset).then(() => {
          !that.data.hideLoading && wx.hideLoading();
          const poster = that.selectComponent('#poster');
          poster.create(that.data.config);
        })
          .catch((err) => {
            !that.data.hideLoading && wx.hideLoading();
            wx.showToast({ icon: 'none', title: err.errMsg || '生成失败' });
            that.setData({
              isCreating: 0
            })
            that.triggerEvent('fail', err);
          })
      },
        onCreateSuccess(e) {
            const { detail } = e;
            this.setData({
              isCreating: 0
            })
            this.triggerEvent('success', detail);
        },
        onCreateFail(err) {
            console.error(err);
            this.setData({
              isCreating: 0
            })
            this.triggerEvent('fail', err);
        }
    }
})