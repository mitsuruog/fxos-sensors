(function() {
  'use strict';

  angular.module('sensors')
    .controller('OrientationController', OrientationController);

  function OrientationController($scope, $rootScope, $window, $log) {

    $scope.title = 'Orientation';
    $scope.orientation = {
      alpha: 0,
      gamma: 0,
      beta: 0
    };

    ////////////

    $scope.$on('$ionicView.beforeEnter', function() {
      $log.debug('Orientation:beforeEnter');
      $window.addEventListener('deviceorientation', handleDeviceOrientation);
    });

    $scope.$on('$ionicView.beforeLeave', function() {
      $log.debug('Orientation:beforeLeave');
      $window.removeEventListener('deviceorientation', handleDeviceOrientation);
    });

    function handleDeviceOrientation(e) {
      $scope.orientation = e;
      // [MEMO]これ出すと大変なことにw
      $log.debug('Orientation:' + JSON.stringify($scope.orientation));
      $rootScope.$apply();
    }

  }

})();
