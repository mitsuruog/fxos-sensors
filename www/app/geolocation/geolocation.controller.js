(function() {
  'use strict';

  angular.module('sensors')
    .controller('GeolocationController', GeolocationController);

  function GeolocationController($scope, $rootScope, $window, $log, $q) {

    $scope.title = 'Geolocation';
    $scope.geolocation = {
      latitude: 0,
      longitude: 0,
      altitude: 0
    };

    ////////////

    $scope.$on('$ionicView.beforeEnter', function() {
      $log.debug('Geolocation:beforeEnter');
      getCurrentPosition().then(function(position) {
        render(position);
        $scope.watchId = watchPosition();
      });
    });

    $scope.$on('$ionicView.beforeLeave', function() {
      $log.debug('Geolocation:beforeLeave');
      navigator.geolocation.clearWatch($scope.watchId);
    });

    function getCurrentPosition() {
      var deferred = $q.defer();
      navigator.geolocation.getCurrentPosition(function(position) {
        deferred.resolve(position);
      }, function(err) {
        deferred.reject(err);
      });
      return deferred.promise;
    }

    function watchPosition() {
      return navigator.geolocation.watchPosition(function(position) {
        render(position);
      }, function(err) {
        throw err;
      }, {
        enableHighAccuracy: true
      });
    }

    function render(position) {
      $log.debug('Geolocation:' + position.coords);
      $scope.geolocation = position.coords;
      if(!$rootScope.$$phase) {
        $rootScope.$apply();
      }
    }

  }

})();
