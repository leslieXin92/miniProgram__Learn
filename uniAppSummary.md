# 一、小程序初体验

## 1.1 开发前的准备

1. 前往【微信公众平台】，注册账号并登录。
2. 下载并安装【微信开发者工具】。

## 1.2 新建项目

打开【微信开发者工具】，项目 - 新建项目。

## 1.3 基本组成结构

![](https://raw.githubusercontent.com/leslieXin92/picGo/master/img/202203250704564.png)

## 1.4 page 构成

### 1.4.1 wxml

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

### 1.4.2 wxss

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

### 1.4.3 json

全局配置文件和局部配置文件

1. 全局配置文件：根目录下的 .json 文件。
2. 局部配置文件：页面中的 .json 文件。
3. 局部配置文件优先级高于全局配置文件。

## 1.5 宿主环境与小程序的运行环境

1. 宿主环境：程序运行所必须的依赖环境

2. 小程序的宿主环境：手机微信

3. 小程序的运行环境：渲染层 + 逻辑层

   ![](https://raw.githubusercontent.com/leslieXin92/picGo/master/img/202203251747621.png)



# 二、小程序的内置组件

## 2.1 view 组件

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

## 2.2 scroll-view 组件

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

## 2.3 swiper 组件

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

## 2.4 text 组件和 rich-text 组件

```html
<!-- text组件 -->
<text> text </text>

<!-- rich-text组件 -->
<rich-text nodes="<ul> <li>1</li> <li>2</li> </ul>"> </rich-text>
```

## 2.5 button 组件和 image 组件

```html
<!-- button组件 -->
<!-- open-type属性：微信开放能力 -->
<button type="primary" plain> click </button>

<!-- image标签 -->
<!-- mode属性：图片裁剪显示模式 -->
<image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.duoduwang.com%2Fueditor%2Fphp%2Fupload%2Fimage%2F20200420%2F1587361598595117.jpg&refer=http%3A%2F%2Fwww.duoduwang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650848874&t=ee63576a610c5b875f21583b71c79495" />
```



# 三、成员管理及发布流程

## 3.1 成员管理

网址：<a href="https://mp.weixin.qq.com/" style="text-decoration:none">首页 - 成员管理</a>

1. 管理员
2. 项目成员
3. 体验人员

## 3.2 发布流程

网址：<a href="https://mp.weixin.qq.com/" style="text-decoration:none">首页 - 版本管理</a>

1. 本地 - 开发版本
2. 上传 - 体验版本
3. 上传 - 审核版本
4. 上传 - 线上版本



# 四、核心语法

## 4.1 基本语法

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

## 4.2 事件传参

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

## 4.3 双向绑定

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

## 4.4 条件渲染

### demo：

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

### summary：

1. 当 wx:if 条件满足时进行渲染。
2. 当 hidden 条件满足时进行隐藏。
3. wx:if 有更高的切换功耗，hidden 有更高的初始渲染功耗。
4. 频繁切换用 hidden，否则用 wx:if 。

## 4.5 列表渲染

### demo：

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

### summary：

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

## 4.6 网络请求

### demo：

wxml：

```html
<button type="primary" bindtap="handleGetRequest"> get请求 </button>
<button type="primary" bindtap="handlePostRequest"> post请求 </button>
<button type="primary" bindtap="handleAsyncRequest"> async请求 </button>

<view class="resBox">
    <view> get请求结果：</view>
    <view> {{getRes}} </view>
</view>

<view class="resBox">
    <view> get请求结果：</view>
    <view> {{postRes}} </view>
</view>

<view class="resBox">
    <view> async请求结果：</view>
    <view> {{resA}} </view>
    <view> {{resB}} </view>
    <view> {{resC}} </view>
    <view> {{resD}} </view>
</view>
```

js：

```javascript
Page({
    data: {
        getRes: '',
        postRes: '',
        resA: '',
        resB: '',
        resC: '',
        resD: ''
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
                    getRes: res?.data?.data?.title || res.data.code
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
                    postRes: res?.data?.data?.subtitle || res.data.code
                })
            }
        })
    },
    async handleAsyncRequest() {
        const resA = await this.a()
        this.setData({
            resA: resA.data.code
        })
        const resB = await this.b()
        this.setData({
            resB: resB.data.code + 1
        })
        const resC = await this.c()
        this.setData({
            resC: resC.data.code + 2
        })
        const resD = await this.d()
        this.setData({
            resD: resD.data.code + 3
        })
    },
    a() {
        return new Promise((resolve, reject) => {
            wx.request({
                url: 'https://v2.alapi.cn/api/one',
                method: 'POST',
                data: {
                    token: 'LwExDtUWhF3rH5ib'
                },
                success: (res) => {
                    resolve(res)
                },
                fail: (err) => {
                    reject(err)
                }
            })
        })
    },
    b() {
        return new Promise((resolve, reject) => {
            wx.request({
                url: 'https://v2.alapi.cn/api/one',
                method: 'POST',
                data: {
                    token: 'LwExDtUWhF3rH5ib'
                },
                success: (res) => {
                    resolve(res)
                },
                fail: (err) => {
                    reject(err)
                }
            })
        })
    },
    c() {
        return new Promise((resolve, reject) => {
            wx.request({
                url: 'https://v2.alapi.cn/api/one',
                method: 'POST',
                data: {
                    token: 'LwExDtUWhF3rH5ib'
                },
                success: (res) => {
                    resolve(res)
                },
                fail: (err) => {
                    reject(err)
                }
            })
        })
    },
    d() {
        return new Promise((resolve, reject) => {
            wx.request({
                url: 'https://v2.alapi.cn/api/one',
                method: 'POST',
                data: {
                    token: 'LwExDtUWhF3rH5ib'
                },
                success: (res) => {
                    resolve(res)
                },
                fail: (err) => {
                    reject(err)
                }
            })
        })
    }
})
```

### summary：

1. 小程序中请求的限制：

   1. 只能请求 https 协议的接口。
   2. 必须将接口的域名添加到信任列表中。

2. 解决方法：

   1. 生产环境：更改协议为 https，并添加到信任列表。

      网址：<a href="https://mp.weixin.qq.com/" style="text-decoration:none">开发管理 - 开发设置 - 服务器域名</a>

   2. 开发环境：在微信开发者工具右上角的【详情 - 本地设置】中，勾选【不校验合法域名……】一项。

3. 跨越问题：跨域问题主要是针对浏览器而言，而小程序的宿主环境是【微信小程序客户端】，所以小程序中不存在跨域问题。

4. ajax 请求：ajax 依赖于浏览器提供的 XMLHttpRequest 对象，而小程序的宿主环境不是浏览器，所以小程序中的网络请求不是 ajax 请求。

5. 微信小程序中使用 async + await：

   1. 使用 Promise 封装 wx.request；
   2. 使用 async 和 await 简化 Promise 操作。

## 4.7 生命周期

### 4.7.1 App 生命周期

在 app.js 中调用，主要是：

1.  `onLaunch`：小程序初始化完成，全局只触发一次。
2.  `onShow`：小程序启动时，或从后台进入前台。
3.  `onHide`：小程序从前台进入后台时执行。
4.  `onError`：小程序运行脚本出错或者 api 调用失败时执行，会带上错误信息。
5.  `onPageNotFound`：小程序页面不存在时执行。

==执行顺序==：`onLaunch` => `onShow` => `onHide` => `onError` => `onPageNotFound`

### 4.7.2 Pages 生命周期

Pages 生命周期主要是指各个文件对应的 js 中的生命周期，主要是：

1.  `onLoad`：页面加载时执行，只执行一次。
2.  `onReady`：页面初次渲染时执行，只执行一次。
3.  `onShow`：页面展示时执行，执行多次。
4.  `onHide`：页面隐藏，从前台进入后台时执行。
5.  `onUnload`：页面卸载时执行。

==执行顺序==：`onLoad` => `onShow` => `onReady` => `onHide`

### 4.7.3 运行机制

#### 热启动：

指的是小程序启动成功后，点击左上角的 " × " 或按下 home 键离开小程序，小程序并没有直接被销毁，而是进入了后台运行机制中，当在一定时间内再次打开该小程序时，小程序直接从后台进入前台，重新渲染页面，这个过程就是热启动。

#### 冷启动：

指的是小程序从未被打开，【初次加载时】或【卸载小程序后或被微信自动销毁后】，再次重新加载进入小程序，这个过程就是冷启动。

小程序只有在冷启动的时候，才会触发 onLaunch 生命钩子。

### 4.7.4 小程序的一辈子

==打开小程序==：`(App) onLaunch` => `(App) onShow` => `(Pages) onLoad` => `(Pages) onShow` => `(Pages) onReady`

==进入下一个页面==：`(Pages) onHide` => `(Next) onLoad` => `(Next) onReady`  

==返回上一个页面==：`(cur) onUnload` => `(pre) onShow`

==离开小程序==：`(App) onHide`

==再次进入==：小程序未被销毁：从`(App) onShow`开始执行；小程序被销毁：从`(App) onLaunch`开始执行。

![](https://raw.githubusercontent.com/leslieXin92/picGo/master/img/202203291403542.png)

## 4.8 pullToRefresh

### 4.8.1 上拉加载

分页：当列表中数据过多时，一次性加载所有的数据会导致请求过慢，所以前端会使用分页来加载数据。

```javascript
async onReachBottom() {
    // 当数据已经请求完了，就不再请求。
    if (this.data.list.length === this.data.total) {
        return
    }
    // 自增页数
    this.setData({
        page: this.data.page + 1
    })
    // 发请求获取新数据
    const data = await getData()
    // 拼接数据
    this.setData({
        list: [...this.data.list, ...data]
    })
}
```

### 4.8.2 下拉刷新

在 page.json 中开启【下拉刷新】：

```json
{
  "backgroundColor": "#cccccc", // 最底层背景颜色
  "enablePullDownRefresh": true // 开启下拉刷新
}
```

在 page.js 中监听：

```javascript
async onPullDownRefresh() {
    // 1.重置页数
    this.setData({
        page: 1
    })
    // 2.获取最新的数据
    const data = await getData()
    // 3.替换旧数据
    this.setData({
        list: data
    })
    // 4.关闭下拉刷新的动作 (在真机中，下拉刷新的动作不会自动关闭)
    wx.stopPullDownRefresh()
},
```

## 4.9 页面跳转

### 4.9.1 声明式导航

跳转到【tabbar 页面】：

```html
<navigator open-type="switchTab" url="/pages/xxx/xxx"> skip </navigator>
```

跳转到【非 tabbar 页面】：

```html
<navigator url="/pages/xxx/xxx"> skip </navigator>
```

回退：

```html
<navigator open-type="navigateBack"> back </navigator>
```

### 4.9.2 编程式导航

跳转到【tabbar 页面】：

```javascript
wx.switchTab({
    url: '/pages/xxx/xxx'
})
```

跳转到【非 tabbar 页面】：

```javascript
wx.navigateTo({
    url: '/pages/xxx/xxx'
})
```

回退：

```javascript
wx.navigateBack({
    delta: 1 // 回退一步
})
```

## 4.10 导航传参

小程序的导航传参遵循 GET 请求的标准：

1.  以 " ? " 分割 url 和参数。
2.  以 " = " 分割参数的 key 和 value 。
3.  以 " & " 来拼接参数。

tips：在 onLoad 钩子中，会收到 options 这个参数，里边有传递过来的参数。



# 五、组件化编程

## 5.1 创建组件

1.  创建组件：

    1.  根目录创建 `components` 文件夹。
    2.  创建 `demo` 文件夹。
    3.  右键【新建 component】。

2.  使用组件：

    1.  在使用组件的页面的 json 文件中注册组件，key 为标签名，value 为 path。

        ```json
        {
            "usingComponents": {
                "demo": "../../components/demo/demo"
            }
        }
        ```

    2.  在该页面的 wxml 中，以注册的 key 为标签名，使用组件。

        ```html
        <demo> </demo>
        ```

## 5.2 组件的生命周期

1.  `create`：组件实例刚被创建好，此时还不能调用 setData 。
2.  `attached`：组件完全初始化完毕，进入页面 dom 树后，绝大数初始化工作可以在这个钩子里进行。
3.  `detached`：组件离开页面 dom 树后。

tips：组件的生命周期必须被定义在 lifetimes 中，方法必须放到 methods 里。

## 5.3 数据监听器

### demo：

component.wxml：

```html
<view> a：{{a}} </view>
<view> b：{{b}} </view>
<view> c：{{c}} </view>
<button type="primary" bindtap="addB"> B++ </button>
```

component.js：

```javascript
Component({
    // 组件的初始数据
    data: {
        a: 0,
        b: 0,
        c: 0
    },
    // 组件的方法列表
    methods: {
        addB() {
            this.setData({
                b: this.data.b + 1
            })
        }
    },
    // 组件的生命周期
    lifetimes: {
        attached() {
            this.setData({
                a: 1,
                b: 2
            })
        }
    },
    // 数据监听器
    observers: {
        'a,b': function (newA, newB) {
            this.setData({
                c: newA + newB
            })
        }
    }
})
```

### summary：

1.  数据监听器可以用于监听和响应任何属性和数据字段的变化。
2.  数据监听器监听的是 setData 涉及到的数据字段，即使这些数据字段的值没有发生变化，数据监听器依然会被触发。
3.  如果在数据监听器函数中使用 setData 设置本身监听的数据字段，可能会导致死循环，需要特别留意。
4.  数据监听器和属性的 observer 相比，数据监听器更强大且通常具有更好的性能。

## 5.4 组件传值

### 5.4.1 父子间传值

1.  父传子

    父：

    ```html
    <father id="{{id}}"> </father>
    ```

    子：

    ```javascript
    properties: {
        id: string
    }
    ```

2.  子穿父

    父：

    ```javascript
    <father bind:transferId="getId"> </father>
    
    Page({
        data:{
            id: ''
        },
        getId(e){
            const { id } = e.detail
            this.setData({
                id
            })
        }
    })
    ```

    子：

    ```javascript
    this.triggerEvent('transferId', {
        id
    })
    ```

### 5.4.2 兄弟间传值

通过【A组件传递给父组件】，再【父组件传递给B组件】，实现A组件与B组件之间的传值。

## 5.5 插槽

slot……







