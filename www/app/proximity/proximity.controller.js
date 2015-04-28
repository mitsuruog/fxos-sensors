(function() {
  'use strict';

  angular.module('sensors')
    .controller('ProximityController', ProximityController);

  function ProximityController($scope, $rootScope, $window, $log) {

    $scope.title = 'Proximity';
    $scope.proximity = {
      user: 'far',
      device: 5
    }

    ////////////

    $scope.$on('$ionicView.beforeEnter', function() {
      $log.debug('Proximity:beforeEnter');
      $window.addEventListener('userproximity', handleUserProximity);
      $window.addEventListener('deviceproximity', handleDeviceProximity);
    });

    $scope.$on('$ionicView.beforeLeave', function() {
      $log.debug('Proximity:beforeLeave');
      $window.removeEventListener('userproximity', handleUserProximity);
      $window.removeEventListener('deviceproximity', handleDeviceProximity);
    });

    function handleUserProximity(e) {
      $log.debug('Proximity(user):' + e.near);
      $scope.proximity.user = e.near ? 'near' : 'far';
      $rootScope.$apply();
    }

    function handleDeviceProximity(e) {
      $log.debug('Proximity(device):' + e.value);
      $scope.proximity.device = e.value;
      $rootScope.$apply();
    }

  }

})();
