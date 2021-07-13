//Component Object
Component({
  properties: {
    title: {
      type: String,
      value: '默认标题',
      observer(oldV, newV): void {
        console.log(oldV, newV);
      }
    }
  },
  externalClasses: ['my-class']
});