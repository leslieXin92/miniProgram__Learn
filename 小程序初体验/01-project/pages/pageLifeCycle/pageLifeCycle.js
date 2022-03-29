Page({
    data: {
        onLoadMsg: "",
        onReadyMsg: "",
        onShowMsg: "",
        onShareAppMessageMsg: ''
    },

    // 页面加载
    onLoad(options) {
        const time = new Date().getMilliseconds()
        setTimeout(() => {
            this.setData({
                onLoadMsg: `${time} onLoad`,
            })
        }, 1000)
    },

    // 页面初次渲染完成
    onReady() {
        const time = new Date().getMilliseconds()
        setTimeout(() => {
            this.setData({
                onReadyMsg: `${time} onReady`,
            })
        }, 2000)
    },

    // 页面显示
    onShow() {
        const time = new Date().getMilliseconds()
        setTimeout(() => {
            this.setData({
                onShowMsg: `${time} onShow`,
            })
        }, 3000)
    },

    // 页面隐藏
    onHide() {
        console.log("onHide")
    },

    // 页面卸载
    onUnload() {
        console.log("onUnload")
    },

    // 用户下拉动作
    async onPullDownRefresh() {
        // // 1.重置页数
        // this.setData({
        //     page: 1
        // })
        // // 2.获取最新的数据
        // const data = await getData()
        // // 3.替换旧数据
        // this.setData({
        //     list: data
        // })
        // // 4.关闭下拉刷新的动作 (在真机中，下拉刷新的动作不会自动关闭)
        // wx.stopPullDownRefresh()
    },

    // 页面上拉触底事件的处理函数
    onReachBottom() {
        // if (this.data.list.length === this.data.total) {
        //     return
        // }
        // this.setData({
        //     page: this.data.page + 1
        // })
        // const data = await getData() // 发请求获取新数据
        // this.setData({
        //     list: [...this.data.list, ...data]
        // })
    },

    // 用户点击右上角分享
    onShareAppMessage() {
        const time = new Date().getMilliseconds()
        this.setData({
            onShareAppMessageMsg: `${time} onShareAppMessage`,
        })
    },
})