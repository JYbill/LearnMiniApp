// app.ts
App<IAppOption>({
  globalData: {
    userInfo: {}
  },
  async onLaunch({ scene }) {
    console.log('当前场景值: ' + scene);
    wx.getUserInfo({
      success: ({ userInfo }): void => {
        this.globalData.userInfo = userInfo;
      }
    }) 
  },
  onShow(): void {
    // console.log(scene);
  },
  onHide(): void {
    // console.log('miniapp hide');
  },
  onError(): void {
    // console.log(`found error: ${e}`);
  }
})

