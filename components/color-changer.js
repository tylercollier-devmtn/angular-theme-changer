angular.module('themechanger').component('colorChanger', {
  templateUrl: 'templates/color-changer.html',
  bindings: {
    allowEdit: '<',
    fontColor: '<',
    update: '&',
  },
});
