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