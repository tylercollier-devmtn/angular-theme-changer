angular.module('themechanger').component('app', {
  templateUrl: './templates/app.html',
  controller: function() {
    this.allowEdit = true;
    this.fontColor = 'black';

    this.updateColor = function(val, cool) {
      // console.log('-------------- val', val);
      console.log('-------------- cool', cool);
      this.fontColor = val;
    };
  },
  controllerAs: 'myCtrl',
});
