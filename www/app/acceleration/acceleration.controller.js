(function() {
  'use strict';

  angular.module('sensors')
    .controller('AccelerationController', AccelerationController);

  function AccelerationController($scope, $rootScope, $window, $log) {

    $scope.title = 'Acceleration';
    $scope.acceleration = {
      x: 0,
      y: 0,
      z: 0
    };

    ////////////

    $scope.$on('$ionicView.beforeEnter', function() {
      $log.debug('Acceleration:beforeEnter');
      $window.addEventListener('devicemotion', handleDeviceMotion);
    });

    $scope.$on('$ionicView.beforeLeave', function() {
      $log.debug('Acceleration:beforeLeave');
      $window.removeEventListener('devicemotion', handleDeviceMotion);
    });

    function handleDeviceMotion(e) {
      $log.debug('Acceleration:' + e.accelerationIncludingGravity);
      $scope.acceleration = e.accelerationIncludingGravity;
      $rootScope.$apply();
    }

  }

})();
