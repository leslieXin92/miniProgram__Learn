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

网址：<a href="https://mp.weixin.qq.com/" style="text-decoration:none">首页 - 成员管理</a>

1. 管理员
2. 项目成员
3. 体验人员

### 3.2 发布流程

网址：<a href="https://mp.weixin.qq.com/" style="text-decoration:none">首页 - 版本管理</a>

1. 本地 - 开发版本
2. 上传 - 体验版本
3. 上传 - 审核版本
4. 上传 - 线上版本

## 四、核心语法

### 4.1 基本语法

1. js 中读取 data 中的值：

   ```javascript
   this.data.xxx
   ```

2. 修改 data 中的值：

   ```javascript
   this.setData({
       xxx:aaa,
       'xxx.xxx':bbb
   })
   ```

3. 绑定 function：

   ```html
   <view bind:tap="xxx"> click </view>
   <view bindtap="xxx"> click </view>
   ```

### 4.2 事件传参

wxml：

```html
<!-- 通过绑定data-xxx实现事件传参 -->
<view data-step="5" bindtap="add"> click </view>
```

js：

```javascript
// 通过e.target.dataset.xxx实现接收参数
add(e){
    const step = parseInt(e.target.dataset.step)
    ......
}
```

### 4.3 双向绑定

wxml：

```html
<input type="number" value="{{goods.nums}}" bindinput="handleInput" />
```

js：

```javascript
handleInput(e) {
    const newVal = parseInt(e.detail.value)
    this.setData({
        'goods.nums': newVal
    })
}
```

### 4.4 条件渲染

#### demo：

wxml：

```html
<view class="box">
    <input type="number" value="{{count}}" bindinput="handleInput" />
    <text> 成绩： </text>

    <!-- 方式一：wx:if -->
    <view>
        <text wx:if="{{count<60}}"> 不及格 </text>
        <text wx:elif="{{count>=60 && count<70}}"> 及格 </text>
        <text wx:elif="{{count>=70 && count<80}}"> 一般 </text>
        <text wx:elif="{{count>=80 && count<90}}"> 良好 </text>
        <text wx:else> 优秀 </text>
    </view>

    <!-- 方式二：hidden -->
    <view>
        <text hidden="{{!(count<60)}}"> 不及格 </text>
        <text hidden="{{!(count>=60 && count<70)}}"> 及格 </text>
        <text hidden="{{!(count>=70 && count<80)}}"> 一般 </text>
        <text hidden="{{!(count>=80 && count<90)}}"> 良好 </text>
        <text hidden="{{!(count>=90)}}"> 优秀 </text>
    </view>
</view>
```

js：

```javascript
Page({
    data: {
        count: 0
    },
    handleInput(e) {
        const newCount = parseInt(e.detail.value)
        this.setData({
            count: newCount
        })
    }
})
```

#### summary：

1. 当 wx:if 条件满足时进行渲染。
2. 当 hidden 条件满足时进行隐藏。
3. wx:if 有更高的切换功耗，hidden 有更高的初始渲染功耗。
4. 频繁切换用 hidden，否则用 wx:if 。

### 4.5 列表渲染

#### demo：

wxml：

```html
<view>
    <block wx:for="{{list}}" wx:key="id">
        <text> index：{{index}} </text>
        <text> id：{{item.id}} </text>
        <text> name：{{item.name}} </text>
    </block>
</view>
```

js：

```javascript
Page({
    data: {
        list: [{
            id: '001',
            name: '微信小程序'
        }, {
            id: '002',
            name: 'uniApp'
        }, {
            id: '003',
            name: 'typeScript'
        }, {
            id: '004',
            name: 'vue3'
        }]
    }
})
```

#### summary：

1. 遍历：

   ```html
   <view wx:for="{{xxx}}"> </view>
   ```

2. 默认每一项为 item，key 为 index。

3. 自定义 key：

   直接写属性，不加双花括号。

   ```html
   <view wx:for="{{list}}" wx:key="id"> </view>
   ```

4. block 类似 vue 中的 template，不会渲染成 dom 节点。

### 4.6 网络请求

#### demo：

wxml：

```html
<button type="primary" bindtap="handleGetRequest"> get请求 </button>
<button type="primary" bindtap="handlePostRequest"> post请求 </button>
<view class="get">
    <view> get请求结果：</view>
    <view> {{getRes}} </view>
</view>
<view class="post">
    <view> get请求结果：</view>
    <view> {{postRes}} </view>
</view>
```

js：

```javascript
Page({
    data: {
        getRes: '',
        postRes: ''
    },
    handleGetRequest() {
        wx.request({
            url: 'https://v2.alapi.cn/api/one',
            method: 'GET',
            data: {
                token: 'LwExDtUWhF3rH5ib'
            },
            success: (res) => {
                this.setData({
                    getRes: res.data.data.title
                })
            }
        })
    },
    handlePostRequest() {
        wx.request({
            url: 'https://v2.alapi.cn/api/one',
            method: 'POST',
            data: {
                token: 'LwExDtUWhF3rH5ib'
            },
            success: (res) => {
                this.setData({
                    postRes: res.data.data.subtitle
                })
            }
        })
    }
})
```

#### summary：

1. 小程序中请求的限制：

   1. 只能请求 https 协议的接口。
   2. 必须将接口的域名添加到信任列表中。

2. 解决方法：

   1. 生产环境：更改协议为 https，并添加到信任列表。

      网址：<a href="https://mp.weixin.qq.com/" style="text-decoration:none">开发管理 - 开发设置 - 服务器域名</a>

   2. 开发环境：在微信开发者工具右上角的【详情 - 本地设置】中，勾选【不校验合法域名……】一项。

3. 跨越问题：跨域问题主要是针对浏览器而言，而小程序的宿主环境是【微信小程序客户端】，所以小程序中不存在跨域问题。

4. ajax 请求：ajax 依赖于浏览器提供的 XMLHttpRequest 对象，而小程序的宿主环境不是浏览器，所以小程序中的网络请求不是 ajax 请求。