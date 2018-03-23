angular.module('themechanger').component('app', {
  templateUrl: 'templates/app.html',
  controller: function() {
    this.allowEdit = true;
    this.fontColor = 'black';
    this.fontSize = 12;
    this.fontFamily = 'monospace';

    this.updateColor = function(val) {
      this.fontColor = val;
    };

    this.updateEditStatus = function(val) {
      this.allowEdit = val;
    };

    this.updateSize = function(val) {
      this.fontSize = parseInt(val, 10);
    };
  }
});
