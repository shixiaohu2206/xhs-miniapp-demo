Component({
  properties: {
    config: {
      type: Object,
      value: {},
    },
    configB: {
      type: Object,
      value: {},
    },
  },
  data: {
    // 这里是一些组件内部数据
    // config: {},
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () {},
  },
  lifetimes: {
    ready: function () {
      this.setData({
        config: {
          text: "3333",
        },
      });
    },
  },
});
