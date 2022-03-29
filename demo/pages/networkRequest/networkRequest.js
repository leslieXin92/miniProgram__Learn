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