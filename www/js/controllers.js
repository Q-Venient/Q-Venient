angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };


  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    // console.log('Doing login', $scope.loginData);
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    console.log($scope.loginData);
    if($scope.loginData.username == "admin" && $scope.loginData.password == "123456"){
          $timeout(function() {
          $scope.closeLogin();
          $location.path('employees/employees_view');
        }, 1000);
    } else {
          $timeout(function() {
          $scope.closeLogin();
          $location.path('customer/home_home');
        }, 1000);
    } 
  };
})


.controller('PlaylistsCtrl', function($scope, $timeout, $location) {

  $scope.title="Q-Venient";
  $scope.login_title="Home";

  $scope.queue = {};

  $scope.next = function() {
    console.log('Queue Number', $scope.queue);
    $timeout(function() {
        $location.path('customer/transaction');
      }, 1000); 
  };

  $counter = 1;


  $scope.count = function()
  {
    $scope.processNum=$counter;
    console.log($counter++);
  
  }

  $scope.nextqueue = function() {
    console.log('Going In......');
    $timeout(function() {
      $location.path('customer/home_queue');
    }, 1000);
  }

  $scope.cancel = function() {
    $location.path('customer/home_home');
  }

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
