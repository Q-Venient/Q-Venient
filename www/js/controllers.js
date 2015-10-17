angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $http, $ionicModal, $timeout, $location) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};


  // // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };


  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    // console.log('Doing login', $scope.loginData);
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    console.log($scope.loginData);
      $http.post('http://192.168.137.122/myApp/authenticate/login', angular.copy($scope.loginData))
        .success(function(successResp) {
          console.log(successResp)
          if( !successResp ) {
            alert('Invalid Account')
          } else {
            switch(successResp.userType) {
              case 'personnel':
                $location.path('employees/employees_view')
                break;
              case 'admin':
                $location.path('admin/admin_view')
                break;
              default:
                $location.path('customer/home_home')
            }
          }
        })
        .error(function(errorResp) {
          console.log(errorResp)
        })
    // if($scope.loginData.username == "cashier" && $scope.loginData.password == "123456"){
    //       $timeout(function() {
    //       $scope.closeLogin();
    //       $location.path('employees/employees_view');
    //     }, 1000);
    // } else if($scope.loginData.username == "admin" && $scope.loginData.password == "123456") {
    //       $timeout(function() {
    //       $scope.closeLogin();
    //       $location.path('admin/admin_view');
    //     }, 1000);
    // } else {
    //       $timeout(function() {
    //       $scope.closeLogin();
    //       $location.path('customer/home_home');
    //     }, 1000);
    // } 
  };

    $scope.login = function(data) {
    // console.log(data);
    $http.post("http://localhost/barcroid_backend/users/login", angular.copy($scope.data))
      .success(function (response){
      console.log(response);

       // if (response.status == true) {
        // $state.go('app.profile');
      // }
    })
      .error(function(errorResp) {
        console.log(errorResp)
      })
  };

})


.controller('PlaylistsCtrl', function($scope, $timeout, $location, $http) {

  $scope.title="Q-Venient";
  $scope.login_title="Home";

/////////////////////Customer side /////////////////////////

  $scope.queue = {};

  $scope.next = function() {
    console.log('Queue Number', $scope.queue);
    $timeout(function() {
        $location.path('customer/transaction');
      }, 1000); 
  };

  $scope.nextqueue = function() {
    console.log('Going In......');
    $timeout(function() {
      $location.path('customer/home_queue');
    }, 1000);
  }

  $scope.cancel = function() {
    $location.path('customer/home_home');
  }

  $scope.update = function() {
    $location.path('customer/update_profile')
  }

//////////////////End of Customer/////////////////////

/*******************************************************/
/*******************************************************/

//////////////////Employees Side ////////////////////

  $scope.defaults = 0;
  $counter = 1;
  
  $scope.count = function()
  {
    
    if($counter < 2)
    {
      $scope.defaults = " ";
    }
   
       $scope.processNum = $counter;
         console.log($counter++);
         $http.post('http://192.168.137.122/myApp/todo/', {'status': $scope.processNum})
  }

  $scope.updates = function() {
    $location.path('employees/update_profile')
  }

})
///////////////////////////End of Employees////////////////////

///////////////////////////Backend side//////////////////////
.controller('Backendz', function($scope, $timeout, $stateParams, $location, $http) {

  // console.log($stateParams)
  $scope.users = [];
  $scope.addUser = {};
  $scope.developers = [];


  $http.get('http://192.168.137.122/myApp/user/index_id/id/' + $stateParams.userID).success(function (response) {
      
      $scope.user = response[0];
      console.log($scope.user)
    })

  $scope.cancelsignup = function() {
    $location.path('/home');
  }


  $http.get('http://192.168.137.122/myApp/developer').success(function (response)
      {
          $scope.developers = response;
        })

  $scope.addaccount = function() {
    var data = { 
                  firstname: $scope.addUser.firstname, lastname: $scope.addUser.lastname,
                  email: $scope.addUser.email, age: $scope.addUser.age, username: $scope.addUser.username,
                  password: $scope.addUser.password 
                }

    console.log($scope.addUser);
    $http.post('http://192.168.137.122/myApp/user', data).success(function (data, status) {
      alert('user added');

      $scope.users.push(data);
      
      $scope.addUser.firstname = "";
      $scope.addUser.lastname = "";
      $scope.addUser.email = "";
      $scope.addUser.age = "";
      $scope.addUser.username = "";
      $scope.addUser.password = "";
      
      $scope.view_user();

    })            
  }

  $scope.cancel = function() {
      $scope.addUser.firstname = "";
      $scope.addUser.lastname = "";
      $scope.addUser.email = "";
      $scope.addUser.age = "";
      $scope.addUser.username = "";
      $scope.addUser.password = "";
  }

  $scope.delete = function(id) {
      console.log(id);
      $http.delete('http://192.168.137.122/myApp/user/' + id).success(function (response) {
        console.log(response);
      $scope.users.splice(id, 1);  
      
      $scope.view_user();
      
      })
  }

  $scope.view_one_user = function(id) {
    $http.get('http://192.168.137.122/myApp/user/index_id/id/' + id).success(function (response) {
      
      $scope.user = response[0];
      console.log($scope.user);


      $location.path('admin/view_one_user/'+$scope.user.id);
    })
  }

  $scope.view_user = function() {

     $http.get('http://192.168.137.122/myApp/user').success(function (users) {

    $scope.users = users;
    })
  }

  $http.get('http://192.168.137.122/myApp/user').success(function (users) {

    $scope.users = users;
  
  })

  $scope.adduser = function() {
    $location.path('admin/add_user');
  }

  $scope.viewUsers = function() {
    $location.path('admin/view_users');
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});


