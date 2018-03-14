Component({
    properties: {
        images: {
            type: Array,
            value: [{
                url: '',
                width: 0,
                height: 0,
                x: 0,
                y: 0,
            }],
        },
        width: {
            type: Number,
            value: 750,
        },
        height: {
            type: Number,
            value: 750,
        },
        backgroundColor: {
            type: String,
            value: '#ffffff',
        },
        debug: {    // 如果为true会展示canvas，为false则会隐藏
            type: Boolean,
            value: false,
        },
    },
    data: {
    },
    created() {
        const sysInfo = wx.getSystemInfoSync();
        const screenWidth = sysInfo.screenWidth;
        // rpx（responsive pixel）: 规定屏幕宽为750rpx, 所以只需关心rpx即可
        this.factor = screenWidth / 750;
    },
    attached() {
        this.ctx = wx.createCanvasContext('imgCanvas', this);   // 加上this才能选中组件内的canvas元素
        this.ctx.setFillStyle(this.data.backgroundColor);
        this.ctx.fillRect(0, 0, this.toPx(this.data.width), this.toPx(this.data.height));
        this.ctx.draw(true);

        this.setData({
            pxWidth: this.toPx(this.data.width),
            pxHeight: this.toPx(this.data.height),
        });
    },
    methods: {
        create() {
            const { images } = this.data;
            const drawList = [];
            images.forEach((image) => drawList.push(this.drawImage(image)));
            Promise.all(drawList)
                .then(() => {
                    return this.toImage(this.ctx);
                })
                .then((imgPath) => {
                    wx.previewImage({
                        urls: [imgPath],
                    });
                })
                .catch((err) => {
                    console.error(err);
                })
        },
        toImage(ctx) {
            return new Promise((resolve, reject) => {
                wx.canvasToTempFilePath({
                    canvasId: 'imgCanvas',
                    success(res) {
                        resolve(res.tempFilePath);
                    },
                    fail(err) {
                        reject(err);
                    }
                }, this)
            });
        },
        drawImage(image) {
            return new Promise((resolve, reject) => {
                const { x, y, url } = image;
                this.downImage(url)
                    .then((imgPath) => { return this.getImageInfo(imgPath); })
                    .then(({ imgPath, imgInfo }) => {
                        let sx;
                        let sy;
                        const setWidth = image.width;
                        const setHeight = image.height;
                        const width = imgInfo.width;
                        const height = imgInfo.height;

                        if (width / height <= setWidth / setHeight) {
                            sx = 0;
                            sy = (height - ((width / setWidth) * setHeight)) / 2;
                        } else {
                            sy = 0;
                            sx = (width - ((height / setHeight) * setWidth)) / 2;
                        }
                        this.ctx.drawImage(imgPath,
                            sx, sy, (width - (sx * 2)), (height - (sy * 2)),
                            this.toPx(x), this.toPx(y), this.toPx(setWidth), this.toPx(setHeight));
                        this.ctx.draw(true);
                        resolve();
                    })
                    .catch((err) => reject(err));
            });
        },
        downImage(imageUrl) {
            return new Promise((resolve, reject) => {
                wx.downloadFile({
                    url: imageUrl,
                    success(res) {
                        if (res.statusCode === 200) {
                            resolve(res.tempFilePath);
                        } else {
                            reject(res.errMsg);
                        }
                    },
                    fail(err) {
                        reject(err);
                    }
                });
            })
        },
        getImageInfo(imgPath) {
            return new Promise((resolve, reject) => {
                wx.getImageInfo({
                    src: imgPath,
                    success(res) {
                        resolve({ imgPath, imgInfo: res });
                    },
                    fail(err) {
                        reject(err);
                    }
                });
            });
        },
        toPx(rpx) {
            return rpx * this.factor;
        }
    }
})