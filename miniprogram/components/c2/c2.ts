//Component Object
Component({
  methods: {
    handleC2Tap() {
      console.log('c2组件tag');
      this.triggerEvent('custom', {}, { bubbles: true, composed: true})
    }
  }
});