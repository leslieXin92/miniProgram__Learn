Component({
    // 组件的属性列表
    properties: {},

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