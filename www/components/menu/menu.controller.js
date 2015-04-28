(function() {
  'use strict';

  angular.module('sensors.components')
    .controller('MenuController', MenuController);

  function MenuController($scope, $window, menuItems) {

    $scope.items = [];
    $scope.isLock = true;
    $scope.screen = $window.screen;

    angular.forEach(menuItems, function(item) {
      $scope.items.push({
        title: item,
        state: 'app.' + item
      })
    });

    // 初期起動時は画面の回転をロックする
    $scope.screen.mozLockOrientation($scope.screen.mozOrientation);

    ////////////

    $scope.toggleLockOrientation = function() {
      $scope.isLock ? $scope.screen.mozUnlockOrientation() : $scope.screen.mozLockOrientation($scope.screen.mozOrientation);
      $scope.isLock = !$scope.isLock;
    }

  }

})();
