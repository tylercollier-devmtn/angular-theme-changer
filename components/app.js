angular.module('themechanger').component('app', {
  templateUrl: './templates/app.html',
  controller: function() {
    this.allowEdit = true;
    this.fontColor = 'black';

    this.updateColor = function(val) {
      this.fontColor = val;
    };

    this.updateEditStatus = function(val) {
      this.allowEdit = val;
    };
  },
  controllerAs: 'myCtrl',
});
