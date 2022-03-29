Page({
    data: {
        onLoadMsg: '',
        onReadyMsg: '',
        onShowMsg: '',
        onPullDownRefreshMsg: '',
        onReachBottomMsg: ''
    },

    // 页面加载
    onLoad: function (options) {
        const time = new Date().getMilliseconds()
        setTimeout(() => {
            this.setData({
                onLoadMsg: `${time} onLoad`
            })
        }, 1000)

    },

    // 页面初次渲染完成
    onReady: function () {
        const time = new Date().getMilliseconds()
        setTimeout(() => {
            this.setData({
                onReadyMsg: `${time} onReady`
            })
        }, 2000)

    },

    // 页面显示
    onShow: function () {
        const time = new Date().getMilliseconds()
        setTimeout(() => {
            this.setData({
                onShowMsg: `${time} onShow`
            })
        }, 3000)

    },

    // 页面隐藏
    onHide: function () {
        console.log('onHide')
    },

    // 页面卸载
    onUnload: function () {
        console.log('onUnload')
    },

    // 用户下拉动作
    onPullDownRefresh: function () {
        const time = new Date().getMilliseconds()
        this.setData({
            onPullDownRefreshMsg: `${time} onPullDownRefresh`
        })
    },

    // 页面上拉触底事件的处理函数
    onReachBottom: function () {
        const time = new Date().getMilliseconds()
        this.setData({
            onReachBottomMsg: `${time} onReachBottom`
        })
    },

    // 用户点击右上角分享
    onShareAppMessage: function () {
        const time = new Date().getMilliseconds()
        this.setData({
            onShareAppMessageMsg: `${time} onShareAppMessage`
        })
    }
})