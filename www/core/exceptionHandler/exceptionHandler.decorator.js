(function() {
  'use strict';

  angular.module('sensors.core')
    .config(exceptionHandler);

  function exceptionHandler($provide) {
    $provide.decorator("$exceptionHandler", function($delegate, $injector) {
      var ngToast = $injector.get('ngToast');
      return function(exception, cause) {
        // FIXME スタイルが効いてない
        ngToast.create({
          className: 'assertive',
          content: exception.message,
          timeout: 4000,
          dismissButton: true
        });

        // (Optional) Pass the error through to the delegate
        $delegate(exception, cause);
      }
    });
  }

})();
