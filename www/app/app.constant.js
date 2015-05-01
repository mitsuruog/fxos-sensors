(function() {
  'use strict';

  angular.module('sensors')
    .constant('menuItems', [
      'Light',
      'Orientation',
      'Acceleration',
      'Geolocation',
      'Proximity',
      // 'Compass', うまく出ない？？
      // 'Rotation' サポート外？？
    ])
    .constant('appInfomationLink', {
      developer: 'https://github.com/mitsuruog/fxos-sensors',
      appRate: ''
    });

})();
