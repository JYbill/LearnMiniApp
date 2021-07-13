//Component Object
Component({
  properties: {}, // 页面传递的数据
  options: {}, // 配置选项
  data: {}, // 组件数据
  methods: {}, // 组件方法
  externalClasses: ['test-class'], // 页面传递的样式

  observers: { // 监听data、properties属性
    test(): void {} // 只有新的值一个参数
  },

  // 监听页面生命周期
  pageLifetimes: {
    show(): void {
      console.log('页面显示');
    },
    hide(): void {
      console.log('页面隐藏');
    },
    resize(): void {
      console.log('页面尺寸改变');
    }
  },

  lifetimes: {
    created(): void {
      console.log('组件被创建');
    },
    attached(): void {
      console.log('组件准备就绪');
    },
    ready(): void {
      console.log('组件渲染完成');
    },
    moved(): void {
      console.log('组件移动');
    },
    detached(): void {
      console.log('组件被移除');
    }
  }
});