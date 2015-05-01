(function() {
  'use strict';

  angular.module('sensors.components')
    .controller('MenuController', MenuController);

  function MenuController($scope, $window, menuItems, appInfomationLink, openLinkTobrowser) {

    $scope.items = [];
    $scope.isLock = false;
    $scope.link = appInfomationLink;
    $scope.screen = $window.screen;
    $scope.openLink = openLinkTobrowser.open;

    angular.forEach(menuItems, function(item) {
      $scope.items.push({
        title: item,
        state: 'app.' + item
      })
    });

    // 初期起動時は画面の回転をロックする
    // [MEMO] インストール後の初回起動時と通常の再起動時で挙動が異なるので様子見
    //$scope.screen.mozLockOrientation($scope.screen.mozOrientation);

    ////////////

    $scope.toggleLockOrientation = function() {
      $scope.isLock ? $scope.screen.mozUnlockOrientation() : $scope.screen.mozLockOrientation($scope.screen.mozOrientation);
      $scope.isLock = !$scope.isLock;
    }

  }

})();
