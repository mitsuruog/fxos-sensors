(function() {
  'use strict';

  angular.module('sensors')
    .controller('LightController', LightController);

  function LightController($scope, $rootScope, $window, $log) {

    $scope.title = 'Light';
    $scope.devicelight = 0;

    ////////////

    $scope.$on('$ionicView.beforeEnter', function() {
      $log.debug('Light:beforeEnter');
      $window.addEventListener('devicelight', handleDevicelight);
    });

    $scope.$on('$ionicView.beforeLeave', function() {
      $log.debug('Light:beforeLeave');
      $window.removeEventListener('devicelight', handleDevicelight);
    });

    function handleDevicelight(e) {
      $log.debug('Light:' + e.value);
      $scope.devicelight = e.value;
      $rootScope.$apply();
    }

  }

})();
