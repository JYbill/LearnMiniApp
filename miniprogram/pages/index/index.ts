let app = getApp();

Page({
  data: {
    nickName: '',
    msg: 'miniapp'
  },
  onLoad: function (): void {
    this.setData({
      msg: '你好小程序'
    })
  },
  onReady: function () {
  },
  onShow: function () {


  },
  onHide: function () {

  },
  onUnload: function () {

  },
  // onPageScroll({ scrollTop }): void {
  //   console.log(scrollTop);
  // },
  // onTabItemTap(obj): void {
  //   console.log(obj);
  // },
});