//Component Object
Component({
  // behaviors: ['wx://component-export'],
  // export() {
  //   return { cpn: this }
  // },
  data: {
    counter: 0
  },
  methods: {
    addCount(num: number): void {
      this.setData({
        counter: this.data.counter + num
      });
    }
  }
});