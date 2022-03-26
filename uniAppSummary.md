# 微信小程序

## 一、小程序初体验

### 1.1 开发前的准备

1. 前往【微信公众平台】，注册账号并登录。
2. 下载并安装【微信开发者工具】。

### 1.2 新建项目

打开【微信开发者工具】，项目 - 新建项目。

### 1.3 基本组成结构

![](https://raw.githubusercontent.com/leslieXin92/picGo/master/img/202203250704564.png)

### 1.4 page 构成

#### 1.4.1 wxml

1. 什么是 wxml ？

   wxml 是框架设计的一套标签语言 ( 组件 ) ，用来构建小程序页面的结构，其作用类似于网页开发中的 html 。

2. 与 html 的区别：

   1. 标签名称不同：

      html：div、span、img、a ……

      wxml：view、text、image、navigator ……

   2. 属性节点不同：

      html：`<a href='#'> skip </a>`

      wxml：`<navigator url='/page/home/home'> skip to home </navigator>`

   3. wxml 提供了动态渲染数据的模板语法：

      数据绑定、条件渲染、列表渲染 ……

#### 1.4.2 wxss

1. 什么是 wxss ？

   wxss 是一套样式语言，用于描述 wxml 的组件样式，类似网页开发中的 css，且 wxss 具有 css 大部分的特性。

2. 新增了尺寸单位 — rpx，一个 rpx 为页面宽度的 1/750.

3. 提供了全局样式和局部样式。

   1. 全局样式：写入到根目录的 wxss 中的样式。
   2. 局部样式：写入到页面的 wxss 中的样式。
   3. 局部样式优先级高于全局样式。

4. wxss 仅支持部分 css 选择器：

   1. `.class` 和 `#id`
   2. element
   3. 并集选择器和后代选择器
   4. `::before` 和 `::after` 等伪类选择器

#### 1.4.3 json

全局配置文件和局部配置文件

1. 全局配置文件：根目录下的 .json 文件。
2. 局部配置文件：页面中的 .json 文件。
3. 局部配置文件优先级高于全局配置文件。

### 1.5 宿主环境与小程序的运行环境

1. 宿主环境：程序运行所必须的依赖环境

2. 小程序的宿主环境：手机微信

3. 小程序的运行环境：渲染层 + 逻辑层

   ![](https://raw.githubusercontent.com/leslieXin92/picGo/master/img/202203251747621.png)

## 二、小程序的内置组件

### 2.1 view 组件

wxml：

```html
<view class="viewFather" hover-class="press">
	<view class="viewSon" hover-class="press" hover-stop-propagation />
</view>
```

wxss：

```css
.viewFather {
	padding: 20px;
	background-color: aqua;
}
.viewSon {
	height: 50px;
	background-color: brown;
}
.press {
	background-color: chartreuse;
}
```

### 2.2 scroll-view 组件

wxml：

```html
<scroll-view class="scrollFather" scroll-y scroll-x>
	<view class="scrollSon" />
	<view class="scrollSon" />
	<view class="scrollSon" />
</scroll-view>
```

wxss：

```css
.scrollFather {
	width: 200px;
	height: 200px;
	margin: 20px auto;
	border: 3px solid red;
}
.scrollSon {
	width: 300px;
	height: 150px;
	margin: 20px;
	background-color: seagreen;
}
```

### 2.3 swiper 组件

wxml：

```html
<swiper autoplay indicator-dots>
	<swiper-item> A </swiper-item>
	<swiper-item> B </swiper-item>
	<swiper-item> C </swiper-item>
</swiper>
```

wxss：

```css
.swiperFather {
	border: 3px solid red;
}
.swiperSon {
	text-align: center;
	font-size: 30px;
	background-color: royalblue;
}
```

### 2.4 text 组件和 rich-text 组件

```html
<!-- text组件 -->
<text> text </text>

<!-- rich-text组件 -->
<rich-text nodes="<ul> <li>1</li> <li>2</li> </ul>"> </rich-text>
```

### 2.5 button 组件和 image 组件

```html
<!-- button组件 -->
<!-- open-type属性：微信开放能力 -->
<button type="primary" plain> click </button>

<!-- image标签 -->
<!-- mode属性：图片裁剪显示模式 -->
<image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.duoduwang.com%2Fueditor%2Fphp%2Fupload%2Fimage%2F20200420%2F1587361598595117.jpg&refer=http%3A%2F%2Fwww.duoduwang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650848874&t=ee63576a610c5b875f21583b71c79495" />
```

## 三、成员管理及发布流程

### 3.1 成员管理

<a href="https://mp.weixin.qq.com/" style="text-decoration:none">首页 - 成员管理</a>

1. 管理员
2. 项目成员
3. 体验人员

### 3.2 发布流程

<a href="https://mp.weixin.qq.com/" style="text-decoration:none">首页 - 版本管理</a>

1. 本地 - 开发版本
2. 上传 - 体验版本
3. 上传 - 审核版本
4. 上传 - 线上版本

