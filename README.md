# wxa-plugin-canvas
小程序组件-小程序海报组件
   <a href="https://www.npmjs.com/package/wxa-plugin-canvas"><img src="https://img.shields.io/npm/v/wxa-plugin-canvas.svg?style=flat" alt="npm"></a>
   <a href="https://www.npmjs.com/package/wxa-plugin-canvas"><img src="https://img.shields.io/npm/dm/wxa-plugin-canvas.svg?style=flat" alt="npm"></a>

## 概述
wxa-plugin-canvas是一个生成二维码海报的组件，通过非常简单的配置就可以生成精美的海报

## 生成效果
<img width="300" src="https://github.com/jasondu/wxa-plugin-canvas/blob/master/demo.png"></img>

## 组件原理说明文章

https://juejin.im/post/5b7e48566fb9a01a1059543f

## 使用之前

使用 wxa-plugin-canvas 前，请确保你已经学习过微信官方的 [小程序简易教程](https://mp.weixin.qq.com/debug/wxadoc/dev/) 和 [自定义组件介绍](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)。

## 安装

#### 方式一.通过 npm 安装 (推荐)

小程序已经支持使用 npm 安装第三方包，详见 [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)

```
# npm
npm i wxa-plugin-canvas -S --production

# yarn
yarn add wxa-plugin-canvas --production
```

#### 方式二.下载代码

直接通过 git 下载 wxa-plugin-canvas 源代码，并将`miniprogram_dist`目录拷贝到自己的项目组件目录中

## 使用组件

```json
{
  "usingComponents": {
	"poster": "wxa-plugin-canvas/poster",
  }
}
```

接着就可以在 wxml 中直接使用组件

```html
<poster id="poster" config="{{posterConfig}}" bind:success="onPosterSuccess" bind:fail="onPosterFail">
    <button>点击生成海报</button>
</poster>
```

## 使用注意事项

1. 图片的域名**务必**添加到downloadFile合法域名中（开发设置-服务器域名-downloadFile合法域名）
2. 如果要使用**异步生成海报**的方法，务必组件要加上`` id="poster"``

## 组件参数解释

### config字段

| 字段            | 类型                     | 必填 | 描述                                       |
| --------------- | ------------------------ | ---- | ------------------------------------------ |
| width           | Number(单位:rpx)         | 是   | 画布宽度                                   |
| height          | Number(单位:rpx)         | 是   | 画布高度                                   |
| backgroundColor | String                   | 否   | 画布颜色                                   |
| debug           | Boolean                  | 否   | false隐藏canvas，true显示canvas，默认false |
| pixelRatio      | Number                   | 否   | 1为一般，值越大越清晰 |
| preload         | Boolean                  | 否   | true：图片资源预下载 默认false             |
| hide-loading    | Boolean                  | 否   | true：隐藏loading 默认false                |
| blocks          | Object Array（对象数组） | 否   | 看下文                                     |
| texts           | Object Array（对象数组） | 否   | 看下文                                     |
| images          | Object Array（对象数组） | 否   | 看下文                                     |
| lines           | Object Array（对象数组） | 否   | 看下文                                     |



### blocks字段

| 字段名          | 类型             | 必填 | 描述                                   |
| --------------- | ---------------- | ---- | -------------------------------------- |
| x               | Number(单位:rpx) | 是   | 块的坐标                               |
| y               | Number(单位:rpx) | 是   | 块的坐标                               |
| width           | Number(单位:rpx) | 否   | 如果内部有文字，由文字宽度和内边距决定 |
| height          | Number(单位:rpx) | 是   |                                        |
| paddingLeft     | Number(单位:rpx) | 否   | 内左边距                               |
| paddingRight    | Number(单位:rpx) | 否   | 内右边距                               |
| borderWidth     | Number(单位:rpx) | 否   | 边框宽度                               |
| borderColor     | String           | 否   | 边框颜色                               |
| backgroundColor | String           | 否   | 背景颜色                               |
| borderRadius    | Number(单位:rpx) | 否   | 圆角                                   |
| text            | Object           | 否   | 块里面可以填充文字，参考texts字段解释  |
| zIndex          | Int              | 否   | 层级，越大越高                         |

### texts字段

| 字段名         | 类型             | 必填 | 描述                                                         |
| -------------- | ---------------- | ---- | ------------------------------------------------------------ |
| x              | Number(单位:rpx) | 是   | 坐标                                                         |
| y              | Number(单位:rpx) | 是   | 坐标                                                         |
| text           | String\|Object   | 是   | 当Object类型时，参数为text字段的参数，marginLeft、marginRight这两个字段可用（示例请看下文） |
| fontSize       | Number(单位:rpx) | 是   | 文字大小                                                     |
| color          | String           | 否   | 颜色                                                         |
| opacity        | Int              | 否   | 1为不透明，0为透明                                           |
| lineHeight     | Number(单位:rpx) | 否   | 行高                                                         |
| lineNum        | Int              | 否   | 根据宽度换行，最多的行数                                     |
| width          | Number(单位:rpx) | 否   | 没有指定为画布宽度                                           |
| marginLeft     | Number(单位:rpx) | 否   | 当text字段为Object可以使用，用来控制多行文字间距             |
| marginRight    | Number(单位:rpx) | 否   | 当text字段为Object可以使用，用来控制多行文字间距             |
| textDecoration | String           | 否   | 目前只支持 line-through（贯穿线），默认为none                |
| baseLine       | String           | 否   | top\| middle\|bottom基线对齐方式                             |
| textAlign      | String           | 否   | left\|center\|right对齐方式                                  |
| zIndex         | Int              | 否   | 层级，越大越高                                               |
| fontFamily     | String           | 否   | 小程序默认字体为'sans-serif', 请输入小程序支持的字体，例如：'STSong' |
| fontWeight     | String           | 否   | 'bold'加粗字体，目前小程序不支持 100 - 900 加粗            |
| fontStyle      | String           | 否   | 'italic'倾斜字体                                          |

### images字段

| 字段         | 类型             | 必填 | 描述                                      |
| ------------ | ---------------- | ---- | ----------------------------------------- |
| x            | Number(单位:rpx) | 是   | 右上角的坐标                              |
| y            | Number(单位:rpx) | 是   | 右上角的坐标                              |
| url          | String           | 是   | 图片url（**需要添加到下载白名单域名中**）也支持本地图片 |
| width        | Number(单位:rpx) | 是   | 宽度（**会根据图片的尺寸同比例缩放**）    |
| height       | Number(单位:rpx) | 是   | 高度（**会根据图片的尺寸同比例缩放**）    |
| borderRadius | Number(单位:rpx) | 否   | 圆角，跟css一样                           |
| borderWidth  | Number(单位:rpx) | 否   | 边框宽度                                  |
| borderColor  | String           | 否   | 边框颜色                                  |
| zIndex       | Int              | 否   | 层级，越大越高                            |

### lines字段

| 字段   | 类型             | 必填 | 描述           |
| ------ | ---------------- | ---- | -------------- |
| startX | Number(单位:rpx) | 是   | 起始坐标       |
| startY | Number(单位:rpx) | 是   | 起始坐标       |
| endX   | Number(单位:rpx) | 是   | 终结坐标       |
| endY   | Number(单位:rpx) | 是   | 终结坐标       |
| width  | Number(单位:rpx) | 是   | 线的宽度       |
| color  | String           | 否   | 线的颜色       |
| zIndex | Int              | 否   | 层级，越大越高 |

## 事件

### success

返回生成海报图片的本地url，一般做法是使用wx.previewImage预览海报，如下

```javascript
onPosterSuccess(e) {
	const { detail } = e;
	wx.previewImage({
        current: detail,
        urls: [detail]
    })
}
```

### fail

返回错误信息

## 异步生成海报

有些场景可能需要发起ajax请求后才能获取生成海报的数据，这里提供了异步生成海报的方式。

只需要引入组件中的``poster/poster.js``，如下调用就行了

```javascript
import Poster from '../../miniprogram_dist/poster/poster';
Page({
    /**
     * 异步生成海报
     */
    onCreatePoster() {
    	// setData配置数据
    	this.setData({ posterConfig: {...} }, () => {
        	Poster.create(); 
    	});
    }
})
```
## 自定义组件异步生成海报

有些场景可能需要发起ajax请求后才能获取生成海报的数据，这里提供了异步生成海报的方式。

只需要引入组件中的``poster/poster.js``，如下调用就行了，与page不同的是，需要在Poster.create中加入this。

```javascript
import Poster from '../../miniprogram_dist/poster/poster';
Component({
    /**
     * 自定义组件异步生成海报
     */
    onCreatePoster() {
    	// setData配置数据
    	this.setData({ posterConfig: {...} }, () => {
        	Poster.create(true, this); 
    	});
    }
})
```

## 赞赏
<img width="350" src="https://github.com/jasondu/wxa-plugin-canvas/blob/master/zan.jpg"></img>

## 问题反馈

有什么问题可以直接提issue

[提issue](https://github.com/jasondu/wxa-plugin-canvas/issues/new)
