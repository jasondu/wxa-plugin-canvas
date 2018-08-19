//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        posterConfig: {
            width: 750,
            height: 1000,
            backgroundColor: '#fff',
            debug: false,
            blocks: [
                {
                    x: 0,
                    y: 10,
                    width: 750, // 如果内部有文字，由文字宽度和内边距决定
                    height: 120,
                    paddingLeft: 0,
                    paddingRight: 0,
                    borderWidth: 10,
                    borderColor: 'red',
                    backgroundColor: 'blue',
                    borderRadius: 40,
                    text: {
                        text: [
                            {
                                text: '金额¥ 1.00',
                                fontSize: 80,
                                color: 'yellow',
                                opacity: 1,
                                marginLeft: 50,
                                marginRight: 10,
                            },
                            {
                                text: '金额¥ 1.00',
                                fontSize: 20,
                                color: 'yellow',
                                opacity: 1,
                                marginLeft: 10,
                                textDecoration: 'line-through',
                            },
                        ],
                        baseLine: 'middle',
                    },
                }
            ],
            texts: [
                {
                    x: 0,
                    y: 180,
                    text: [
                        {
                            text: '长标题长标题长标题长标题长标题长标题长标题长标题长标题',
                            fontSize: 40,
                            color: 'red',
                            opacity: 1,
                            marginLeft: 0,
                            marginRight: 10,
                            width: 200,
                            lineHeight: 40,
                            lineNum: 2,
                        },
                        {
                            text: '原价¥ 1.00',
                            fontSize: 40,
                            color: 'blue',
                            opacity: 1,
                            marginLeft: 10,
                            textDecoration: 'line-through',
                        },
                    ],
                    baseLine: 'middle',
                },
                {
                    x: 10,
                    y: 330,
                    text: '金额¥ 1.00',
                    fontSize: 80,
                    color: 'blue',
                    opacity: 1,
                    baseLine: 'middle',
                    textDecoration: 'line-through',
                },
            ],
            images: [
                {
                    url: 'https://lc-I0j7ktVK.cn-n1.lcfile.com/02bb99132352b5b5dcea.jpg',
                    width: 300,
                    height: 300,
                    y: 450,
                    x: 0,
                    // borderRadius: 150,
                    // borderWidth: 10,
                    // borderColor: 'red',
                },
                {
                    url: 'https://lc-I0j7ktVK.cn-n1.lcfile.com/02bb99132352b5b5dcea.jpg',
                    width: 100,
                    height: 100,
                    y: 450,
                    x: 400,
                    borderRadius: 100,
                    borderWidth: 10,
                },
            ],
            lines: [
                {
                    startY: 800,
                    startX: 10,
                    endX: 300,
                    endY: 800,
                    width: 5,
                    color: 'red',
                }
            ]

        }
    },
    onPosterSuccess(e) {
        const { detail } = e;
        wx.previewImage({
            current: detail,
            urls: [detail]
        })
    },
    onPosterFail(err) {
        console.error(err);
    }
})
