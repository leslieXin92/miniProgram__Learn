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