angular.module('themechanger').component('sizeChanger', {
  templateUrl: 'templates/size-changer.html',
  bindings: {
    allowEdit: '<',
    fontSize: '<',
    update: '&',
  }
})