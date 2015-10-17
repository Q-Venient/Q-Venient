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
    templateUrl: 'templates/signup.html',
    controller: 'Backendz'
    })

  .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html',
          controller: 'Backendz'
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

     .state('customer.about', {
          url: '/about',
          views: {
            'menuContent' : {
              templateUrl: "templates/Customer/about.html",
              controller: "Backendz"
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

     .state('customer.profile', {
          url: '/profile',
          views: {
            'menuContent' : {
              templateUrl: "templates/Customer/profile.html",
              controller: "PlaylistsCtrl"
            }
          }
        }) 

      .state('customer.update_profile', {
          url: '/update_profile',
          views: {
            'menuContent' : {
              templateUrl: "templates/Customer/update_profile.html",
              controller: "PlaylistsCtrl"
            }
          }
        }) 




    .state('customerNew', {
      url: '/customer',
      abstract: true,
      templateUrl: 'templates/customer/customer_new_menu.html',
      controller: 'PlaylistsCtrl'
    })     

    .state('customerNew.home_queue', {
      url: '/home_queue',
      views: {
        'menuContent' : {
          templateUrl: "templates/Customer/home_queue.html",
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

      .state('employees.update_profile', {
          url: '/update_profile',
          views: {
            'menuContent' : {
              templateUrl: "templates/employees/update_profile.html",
              controller: "PlaylistsCtrl"
            }
          }
        }) 


    .state('employees.about', {
        url: '/about',
        views: {
            'menuContent' : {
              templateUrl: "templates/employees/about.html",
              controller: "Backendz"
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

///////////////////Admin user//////////////////////////////////

    .state('admin', {
      url: '/admin',
      abstract: true,
      templateUrl: 'templates/admin/admin_menu.html',
      controller: 'PlaylistsCtrl'
    })

    .state('admin.admin_view', {
       url: '/admin_view',
      views: {
        'menuContent' : {
          templateUrl: "templates/admin/admin_view.html",
          controller: "Backendz"
        }
      }
    })

    .state('admin.about', {
       url: '/about',
      views: {
        'menuContent' : {
          templateUrl: "templates/admin/about.html",
          controller: "Backendz"
        }
      }
    })

    .state('admin.profile', {
       url: '/profile',
      views: {
        'menuContent' : {
          templateUrl: "templates/admin/profile.html",
          controller: "Backendz"
        }
      }
    })

    .state('admin.view_users', {
       url: '/view_users',
      views: {
        'menuContent' : {
          templateUrl: "templates/admin/view_users.html",
          controller: "Backendz"
        }
      }
    })

    .state('admin.add_user', {
       url: '/add_user',
      views: {
        'menuContent' : {
          templateUrl: "templates/admin/add_user.html",
          controller: "Backendz"
        }
      }
    })                        

    .state('admin.view_one', {
      url: '/view_one_user/:userID',
      views: {
        'menuContent' : {
          templateUrl: "templates/admin/view_one_user.html",
          controller: "Backendz"
        }
      }
    })

    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
