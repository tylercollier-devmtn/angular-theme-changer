angular.module('themechanger').component('colorChanger', {
  templateUrl: 'templates/color-changer.html',
  bindings: {
    fontColor: '<',
    update: '&',
  },
  controller: function() {
    // this.x = function(q) {
    //   console.log('-------------- hi from x');
    //   this.update({ xyz: q })
    //   console.log('-------------- hi from x2');
    // }
  }
});
