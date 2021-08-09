// pages/demo14/demo14.js
Page({
    data: {
        gender: '',
        list: [
            {
                id: 0,
                name: '苹果',
                value: 'apple'
            },
            {
                id: 1,
                name: '香蕉',
                value: 'banner'
            },
            {
                id: 2,
                name: '橙子',
                value: 'orign'
            }
        ],
        checkedList: []
    },
    // 单选框
    handleChange(e) {
        // 1.获取单选框中的值
        let gender = e.detail.value;
        // 2.把值赋值给 data中的数据
        this.setData({
            gender
        })
    },
    // 多选框
    handleItemChange(e) {
        console.log(e);
        // 1.获取被选中的复选框的值
        const checkedList = e.detail.value;
        // 2.进行赋值
        this.setData({
            checkedList
        })
    }
})