//Page Object
Page({
  data: {
    isActive: false,
    data: ['a', 'b', 'c']
  },

  hadnleViewTap(): void {
    this.setData({
      isActive: !this.data.isActive
    })
  }
});