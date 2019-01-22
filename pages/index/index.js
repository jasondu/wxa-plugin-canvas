//index.js
import Poster from '../../miniprogram_dist/poster/poster';

const posterConfig = {
    jdConfig: {
        width: 750,
        height: 1334,
        backgroundColor: '#fff',
        debug: false,
        blocks: [
            {
                width: 690,
                height: 808,
                x: 30,
                y: 183,
                borderWidth: 2,
                borderColor: '#f0c2a0',
                borderRadius: 20,
            },
            {
                width: 634,
                height: 74,
                x: 59,
                y: 770,
                backgroundColor: '#fff',
                opacity: 0.5,
                zIndex: 100,
            },
        ],
        texts: [
            {
                x: 113,
                y: 61,
                baseLine: 'middle',
                text: '伟仔',
                fontSize: 32,
                color: '#8d8d8d',
            },
            {
                x: 30,
                y: 113,
                baseLine: 'top',
                text: '发现一个好物，推荐给你呀',
                fontSize: 38,
                color: '#080808',
            },
            {
                x: 92,
                y: 810,
                fontSize: 38,
                baseLine: 'middle',
                text: '标题标题标题标题标题标题标题标题标题',
                width: 570,
                lineNum: 1,
                color: '#8d8d8d',
                zIndex: 200,
            },
            {
                x: 59,
                y: 895,
                baseLine: 'middle',
                text: [
                    {
                        text: '2人拼',
                        fontSize: 28,
                        color: '#ec1731',
                    },
                    {
                        text: '¥99',
                        fontSize: 36,
                        color: '#ec1731',
                        marginLeft: 30,
                    }
                ]
            },
            {
                x: 522,
                y: 895,
                baseLine: 'middle',
                text: '已拼2件',
                fontSize: 28,
                color: '#929292',
            },
            {
                x: 59,
                y: 945,
                baseLine: 'middle',
                text: [
                    {
                        text: '商家发货&售后',
                        fontSize: 28,
                        color: '#929292',
                    },
                    {
                        text: '七天退货',
                        fontSize: 28,
                        color: '#929292',
                        marginLeft: 50,
                    },
                    {
                        text: '运费险',
                        fontSize: 28,
                        color: '#929292',
                        marginLeft: 50,
                    },
                ]
            },
            {
                x: 360,
                y: 1065,
                baseLine: 'top',
                text: '长按识别小程序码',
                fontSize: 38,
                color: '#080808',
            },
            {
                x: 360,
                y: 1123,
                baseLine: 'top',
                text: '超值好货一起拼',
                fontSize: 28,
                color: '#929292',
            },
        ],
        images: [
            {
                width: 62,
                height: 62,
                x: 30,
                y: 30,
                borderRadius: 62,
                url: 'https://lc-I0j7ktVK.cn-n1.lcfile.com/02bb99132352b5b5dcea.jpg',
            },
            {
                width: 634,
                height: 634,
                x: 59,
                y: 210,
                url: 'https://lc-I0j7ktVK.cn-n1.lcfile.com/193256f45999757701f2.jpeg',
            },
            {
                width: 220,
                height: 220,
                x: 92,
                y: 1020,
                url: 'https://lc-I0j7ktVK.cn-n1.lcfile.com/d719fdb289c955627735.jpg',
            },
            {
                width: 750,
                height: 90,
                x: 0,
                y: 1244,
                url: 'https://lc-I0j7ktVK.cn-n1.lcfile.com/67b0a8ad316b44841c69.png',
            }
        ]

    },
    demoConfig: {
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
}
Page({
    data: {
        posterConfig: posterConfig.jdConfig,
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
    },

    /**
     * 异步生成海报
     */
    onCreatePoster() {
    	this.setData({ posterConfig: posterConfig.demoConfig }, () => {
        	Poster.create(true);    // 入参：true为抹掉重新生成
    	});
    },

    onCreateOtherPoster() {
    	this.setData({ posterConfig: posterConfig.jdConfig }, () => {
        	Poster.create(true);    // 入参：true为抹掉重新生成 
    	});
    }
})
