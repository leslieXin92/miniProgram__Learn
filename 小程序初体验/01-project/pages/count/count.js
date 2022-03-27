Page({
    data: {
        goods: {
            nums: 0,
            price: 10
        }
    },
    handleAddcount() {
        this.setData({
            'goods.nums': this.data.goods.nums + 1
        })
    },
    handleAdd5(e) {
        const step = parseInt(e.target.dataset.step)
        this.setData({
            'goods.nums': this.data.goods.nums + step
        })
    },
    handleInput(e) {
        const newVal = parseInt(e.detail.value)
        this.setData({
            'goods.nums': newVal
        })
    }
})