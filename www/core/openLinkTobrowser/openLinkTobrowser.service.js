(function() {
  'use strict';

  angular.module('sensors.core')
    .factory('openLinkTobrowser', openLinkTobrowser);

  function openLinkTobrowser() {

    // Public API here
    var service = {
      open: open
    };

    return service;

    ////////////
    function open(url) {
      var activity = new MozActivity({
        name: 'view',
        data: {
          type: 'url',
          url: url
        }
      });
    }

  }

})();
