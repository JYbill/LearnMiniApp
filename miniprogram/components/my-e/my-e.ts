//Component Object
Component({
  methods: {
    handleBtnTap() {
      this.triggerEvent('cpnBtnEvent', {name: 'bill'});
    }
  }
});