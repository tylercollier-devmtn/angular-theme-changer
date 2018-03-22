angular.module('themechanger').component('colorChanger', {
  templateUrl: './templates/color-changer.html',
  bindings: {
    fontColor: '<',
    update: '&',
    allowEdit: '<',
  },
  // controller: function() {
  //   this.doStuffOnChange = function() {
  //     console.log('the font color is ' + this.fontColor);
  //     console.log('-------------- this', this);
  //     this.update({ val: this.fontColor });
  //     console.log('after')
  //   }
  // }
})