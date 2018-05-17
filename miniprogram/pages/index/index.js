Page({
    data: {
        images: [{
            url: 'https://lc-ju8bqif8.cn-n1.lcfile.com/1d23b40f67cbb50ae5c2.PNG',
            width: 560,             // 单位 rpx
            height: 830,
            x: 0,
            y: 0,
        },
        {
            url: 'https://lc-i0j7ktvk.cn-n1.lcfile.com/8eb44bfd6dd7e94e1b51.png',
            width: 160,
            height: 160,
            x: 200,
            y: 585,
        }
        ],
        texts: [{
            text: '你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好',
            color: 'red',           // 文字颜色
            fontSize: 24,           // 字体 单位rpx
            textAlign: 'left',      // 对齐方式：left center right
            x: 0,                   // 坐标x，以文字的右上角为原点，单位rpx
            y: 0,                   // 坐标y，以文字的右上角为原点，单位rpx
            width: 560,             // 文字区域的宽度
            lineNum: 2,             // 文字行数，放不下使用...代替
            lineHeight: 50,         // 行高 单位rpx
        },
        {
            text: '测试测试测试测试测试测试测试测试测试测试测试测试',
            color: 'blue',           // 文字颜色
            fontSize: 32,           // 字体 单位rpx
            textAlign: 'left',      // 对齐方式：left center right
            x: 0,                   // 坐标x，以文字的右上角为原点，单位rpx
            y: 300,                   // 坐标y，以文字的右上角为原点，单位rpx
            width: 500,             // 文字区域的宽度
            lineNum: 2,             // 文字行数，放不下使用...代替
            lineHeight: 50,         // 行高 单位rpx
        }
        ],
        width: 560,
        height: 830,
        backgroundColor: '#fff',
        debug: true,
    },
    onLoad: function () {
    }
})