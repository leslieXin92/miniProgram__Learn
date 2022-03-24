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

