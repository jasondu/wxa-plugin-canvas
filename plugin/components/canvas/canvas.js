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
        drawArr: [],
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
            images.forEach((image, index) => drawList.push(this.drawImage(image, index)));
            Promise.all(drawList)
                .then(() => {
                    this.data.drawArr.sort(function (a, b) {
                        return a.index - b.index;
                    });
                    this.data.drawArr.forEach(({ imgPath, sx, sy, sw, sh, x, y, w, h }) => {
                        this.ctx.drawImage( imgPath, sx, sy, sw, sh, x, y, w, h );
                        this.ctx.draw(true);
                    })
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
        drawImage(image, index) {
            return new Promise((resolve, reject) => {
                const { x, y, url } = image;
                this.downImage(url)
                    .then((imgPath) => { return this.getImageInfo(imgPath, index); })
                    .then(({ imgPath, imgInfo, index }) => {
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
                        this.data.drawArr.push({
                            index,
                            imgPath,
                            sx, sy, sw: (width - (sx * 2)), sh: (height - (sy * 2)),
                            x: this.toPx(x), y: this.toPx(y), w: this.toPx(setWidth), h: this.toPx(setHeight),
                        });
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
        getImageInfo(imgPath, index) {
            return new Promise((resolve, reject) => {
                wx.getImageInfo({
                    src: imgPath,
                    success(res) {
                        resolve({ imgPath, imgInfo: res, index });
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