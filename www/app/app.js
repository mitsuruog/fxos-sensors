// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('sensors', [
  'ionic',
  'sensors.components',
  'sensors.core',
  'uiGmapgoogle-maps'
])

.config(function($compileProvider) {
  // see FirefoxOSのパッケージ型アプリとAngularJSのngSrc/ngHref - Qiita http://qiita.com/_likr/items/cc1731561e2221927b07
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*((https?|ftp|file|app):|data:image\/)/);
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|app):/);
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    // if (window.cordova && window.cordova.plugins.Keyboard) {
    //   cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    // }
    // if (window.StatusBar) {
    //   // org.apache.cordova.statusbar required
    //   StatusBar.styleDefault();
    // }
  });
})

.config(function(uiGmapGoogleMapApiProvider) {
  uiGmapGoogleMapApiProvider.configure({
    v: '3.17',
    libraries: 'weather,geometry,visualization'
  });
})

.config(function($stateProvider, $urlRouterProvider, menuItems) {

  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'components/menu/menu.html',
      controller: 'MenuController'
    });

  angular.forEach(menuItems, function(item) {
    var state = 'app.' + item;
    var url = '/' + item.toLowerCase();
    var template = 'app/<item>/<item>.html'.replace(/<item>/g, item.toLowerCase());
    var controller = '<item>Controller'.replace(/<item>/, item);
    $stateProvider.state(state, {
      url: url,
      views: {
        'menuContent': {
          templateUrl: template,
          controller: controller
        }
      }
    });
  });

  $urlRouterProvider.otherwise('/app/' + menuItems[0].toLowerCase());

});
