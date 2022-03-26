// pages/count/count.js
Page({
    data: {
        goods: {
            nums: 1,
            price: 10
        }
    },
    // getGoodsSum() {
    //     this.setData({
    //         'goods.sum': this.goods.nums * this.goods.price
    //     })
    // },
    handleAddcount() {
        this.setData({
            'goods.nums': this.data.goods.nums + 1
        })
    }
})