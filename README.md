# wxa-plugin-canvas
小程序插件-生成二维码海报

# 其他已经上线的插件
日历插件：https://github.com/jasondu/wxa-plugin-calendar
点餐插件：https://github.com/jasondu/wxa-plugin-menu

## 代码片段链接

wechatide://minicode/f8e606e9e666617fd18e72c520014dcd

## 插件效果

<img width="300" src="https://github.com/jasondu/wxa-plugin-canvas/blob/master/demo.gif"></img>

- 通过简单的参数传入就可以生成分享海报，图片会根据设定的宽度和高度进行裁剪（不会压缩图片）

## 如何使用

1. 申请插件
在小程序管理后台-设置-第三方服务-添加插件，插件APPID：wx637a3fa923864f90，添加完请联系（微信：weizaidu）审核通过
2. 使用插件
在app.json中加上以下代码
```
  "plugins": {
    "myPlugin": {
      "version": "1.0.0",
      "provider": "wx637a3fa923864f90"
    }
  }
```
在需要使用插件的页面中的json文件添加以下代码
```
  "usingComponents": {
    "img-canvas": "plugin://myPlugin/canvas"
  }
```
在需要使用地方添加
```
<img-canvas images="{{images}}" width="{{width}}" height="{{height}}" background-color="{{backgroundColor}}" debug="{{debug}}">
    <button>生成海报</button> // 这个为自己自定义的按钮
</img-canvas>
```
## 插件参数解释

```
        images: { // 需要添加到海报里的图片信息
            type: Array,
            value: [{
                url: '',  // 图片地址
                width: 0, // 图片要展示的宽度
                height: 0,// 图片要展示的高度
                x: 0,     // 图片要展示在海报的x
                y: 0,     // 图片要展示在海报的y
            }],
        },
        width: { // 海报的宽度
            type: Number,
            value: 750,
        },
        height: { // 海报的高度
            type: Number,
            value: 750,
        },
        backgroundColor: { // 海报的背景色
            type: String,
            value: '#ffffff',
        },
        debug: { // 如果为true会展示canvas，为false则会隐藏
            type: Boolean,
            value: false,
        },
```
> 插件没有审核通过，由于这个插件的性质还是偏向于组件，所以不符合审核要求，代码就先放着吧
