// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   * 立马存放的是 要从父组件传递过来的数据
   */
  properties: {
    // 要接收的数据的名称
    tabs: {
      // 数据类型
      type: Array,
      // 默认值
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    hanldeItemTap(e) {
      // 1.绑定点击事件 需要在methods中绑定
      // 2.获取被点击的索引
      // 3.获取原数组
      // 4.对数组循环
      //   1.给每一个循环项 选中属性 改为 false 
      //   2.给 当前的索引的 项 添加激活选中效果就可以了
      // 5.点击事件触发
      //   1.触发父组件中的自定义事件 同时传数据过去
      //   2.this.triggerEvent("父组件自定义事件的名称",要传递的参数)
      // 2.获取索引
      // console.log(e);
      const { index } = e.currentTarget.dataset;
      // 5.触发父组件中的自定义事件 同时传数据过去
      this.triggerEvent('itemChange', { index });
      // 3.获取data中的数组
      // 解构 对 复杂类型进行解构 复制了一份 变量的引用而已
      // 最严谨的做法 重新拷贝一份数组，再对数组的备份进行处理
      // let tabs = JSON.parse(JSON.stringify(this.data.tabs));
      // 不要直接修改 this.data.数据
      let { tabs } = this.data;
      // let tabs = this.data.tabs;
      // 4.循环数组
      // [].forEach 遍历数组 遍历数组的时候 修改了v,也会导致原数组被修改
      tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
      this.setData({
        tabs
      })
    }
  }
})
