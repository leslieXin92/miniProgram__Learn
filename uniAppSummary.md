# 微信小程序

## 一、开发前的准备

1. 前往【微信公众平台】，注册账号并登录。
2. 下载并安装【微信开发者工具】。

## 二、新建项目

打开【微信开发者工具】，项目 - 新建项目。

## 三、基本组成结构

![](https://raw.githubusercontent.com/leslieXin92/picGo/master/img/202203250704564.png)

## 四、page 构成

### 4.1 wxml

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

### 4.2 wxss

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

### 4.3 json

全局配置文件和局部配置文件

1. 全局配置文件：根目录下的 .json 文件。
2. 局部配置文件：页面中的 .json 文件。
3. 局部配置文件优先级高于全局配置文件。