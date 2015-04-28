(function() {
  'use strict';

  angular.module('sensors.components')
    .controller('MenuController', MenuController);

  function MenuController($scope, menuItems) {

    $scope.items = [];
    angular.forEach(menuItems, function(item) {
      $scope.items.push({
        title: item,
        state: 'app.' + item
      })
    });

    ////////////

  }

})();
