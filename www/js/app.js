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

    .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'AppCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html'
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

////////////// Customer User //////////////////////////

  .state('customer', {
    url: '/customer',
    abstract: true,
    templateUrl: 'templates/customer/customer_menu.html',
    controller: 'PlaylistsCtrl'
  })

    .state('customer.home_login', {
      url: '/home_login',
      views: {
        'menuContent' : {
          templateUrl: "templates/Customer/home_login.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('customer.transaction', {
      url: '/transaction',
      views: {
        'menuContent' : {
          templateUrl: "templates/Customer/transaction.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('customer.home_queue', {
      url: '/home_queue',
      views: {
        'menuContent' : {
          templateUrl: "templates/Customer/home_queue.html",
          controller: "PlaylistsCtrl"
        }
      }
    })

    .state('customer.home_home', {
          url: '/home_home',
          views: {
            'menuContent' : {
              templateUrl: "templates/Customer/home_home.html",
              controller: "PlaylistsCtrl"
            }
          }
        })

     .state('customer.about', {
          url: '/about',
          views: {
            'menuContent' : {
              templateUrl: "templates/Customer/about.html",
              controller: "PlaylistsCtrl"
            }
          }
        })        

     .state('customer.profile', {
          url: '/profile',
          views: {
            'menuContent' : {
              templateUrl: "templates/Customer/profile.html",
              controller: "PlaylistsCtrl"
            }
          }
        }) 

////////////////////End here////////////////////////////////
///////////////////Employees User//////////////////////////
  
    .state('employees', {
      url: '/employees',
      abstract: true,
      templateUrl: 'templates/employees/employees_menu.html',
      controller: 'PlaylistsCtrl'
    })


    .state('employees.employees_view', {
       url: '/employees_view',
      views: {
        'menuContent' : {
          templateUrl: "templates/employees/employees_view.html",
          controller: "PlaylistsCtrl"
        }
      }
    })

    .state('employees.profile', {
      url: '/profile',
      views: {
          'menuContent' : {
              templateUrl: "templates/employees/profile.html",
              controller: "PlaylistsCtrl"
            }
          }
        }) 

    .state('employees.about', {
        url: '/about',
        views: {
            'menuContent' : {
              templateUrl: "templates/employees/about.html",
              controller: "PlaylistsCtrl"
            }
          }
        })

    .state('employees.home_home', {
        url: '/home_home',
        views: {
            'menuContent' : {
              templateUrl: "templates/employees/home_home.html",
              controller: "PlaylistsCtrl"
            }
          }
        })
    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
