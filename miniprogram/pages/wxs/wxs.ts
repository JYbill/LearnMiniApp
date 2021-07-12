//Page Object
Page({
  data: {
   price: 0,
   categoryArr: ['衣服', '家电', '鞋子']
  },
  onLoad(): void {
    setTimeout(() => {
      this.setData({
        price: 12.8888888
      })
    }, 500);
  },
  handleBtnTap(): void {
    console.log('点击');
  },
  handleBtnTapC(): void {
    console.log('catch点击');
  },
  handleTap(): void {
    console.log('tap');
  },
  handleTouchStart(): void {
    console.log('touch start');
  },
  handleTouchEnd(): void {
    console.log('touch end');
  },
  handleTouchMove(): void {
    console.log('touch move');
  },
  handleLongPress(): void {
    console.log('long press');
  },
  handleEventTouchEnd(e:any): void {
    console.log(e);
  },
  outerTap(e: any): void {
    console.log(e);
  },
  innerTap(e: any): void {
    console.log(e);
  },
  handleItemTap(e: any): void {
    console.log(e);
    // console.log(e.currentTarget.dataset);
    // console.log(e.mark);
  },
  handleContinerTap(e: any): void {
    console.log(e.currentTarget.dataset);
    console.log(e.mark);
  },
  handleCaptureFatherTap(): void {
    console.log('捕获事件: father');
  },
  handleCaptureSonTap(): void {
    console.log('捕获事件: son');
  },
  handleBindFatherTap(): void {
    console.log('冒泡事件: father');
  },
  handleBindSonTap(): void {
    console.log('冒泡事件: son');
  },
  catchCaptureEvent(): void {
    console.log('冒泡事件被抓捕');
  },
  catchBindEvent(): void {
    console.log('冒泡事件被抓捕');
  }
});