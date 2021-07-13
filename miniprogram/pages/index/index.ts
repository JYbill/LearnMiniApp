Page({
  data: {
    count: 0,
    isShow: true
  },
  handleE2() {
    console.log('页面的c2');
  },
  handleE1() {
    console.log('页面的c1');
  },
  handleAddCount(): void {
    console.log(this.selectComponent('#my-sel'));
    // this.selectComponent('#my-sel').addCount(5);
  },
  onShow(): void {
    // console.log('page show');
  },
  handleShowCpn() {
    this.setData({
      isShow: !this.data.isShow
    })
  }
});