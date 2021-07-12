//Page Object
Page({
  data: {
    imgPath: ''
  },
  //options(Object)
  onLoad: function(){
    
  },
  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },

  // 获取用户信息
  handleUserInfo(e: any): void {
    console.log(e);
  },

  // 用户选择照片
  handleChooseAblum(): void {
    wx.chooseImage({
      success: ({ tempFilePaths }): void => {
        console.log(tempFilePaths);
        this.setData({
          imgPath: tempFilePaths[0]
        })
      }
    })
  },

  // 图片加载完成回调函数
  handleLoad(e: any): void {
    console.log(e);

  },

  // input聚焦
  handleFocus({ detail }: any): void {
    console.log(detail);
  },
  // 失去焦点
  handleBlur({ detail }: any): void {
    console.log(detail);
  },
  // 用户输入
  handleInput({ detail }: any): void {
    console.log(detail);
  },

  // 滚动
  hadnleScroll({detail}: any): void {
    console.log(detail);
  },


});