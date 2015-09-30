// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })

  .state('app.contact', {
    url: '/contact',
    views: {
      'menuContent': {
        templateUrl: 'templates/contact.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })

  .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.home_login', {
      url: '/home_login',
      views: {
        'menuContent' : {
          templateUrl: "templates/home_login.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.transaction', {
      url: '/transaction',
      views: {
        'menuContent' : {
          templateUrl: "templates/transaction.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.home_queue', {
      url: '/home_queue',
      views: {
        'menuContent' : {
          templateUrl: "templates/home_queue.html",
          controller: "PlaylistsCtrl"
        }
      }
    })
    .state('app.adminView', {
       url: '/adminView',
      views: {
        'menuContent' : {
          templateUrl: "templates/Admin/admin_view.html",
          controller: "PlaylistsCtrl"
        }
      }
    })
    .state('app.signUp', {
       url: '/signUp',
      views: {
        'menuContent' : {
          templateUrl: "templates/signup.html",
          controller: "PlaylistsCtrl"
        }
      }
    })
    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
