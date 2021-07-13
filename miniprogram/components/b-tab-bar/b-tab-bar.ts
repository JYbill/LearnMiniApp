//Component Object
Component({
  properties: {
    categoryArr: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    handleItemTap({mark}: any): void {
      this.setData({
        currentIndex: mark.index
      })
    }
  },
  externalClasses: ['active']
});