angular.module('app').controller('mvNavBarLoginCtrl',function($scope,$http,mvIdentity,mvNotifier,mvAuth,$location){
    $scope.identity = mvIdentity;
    $scope.signin = function(username,password){
        mvAuth.authenticateUser(username,password).then(function(success){
            if(success){
                mvNotifier.notify('You have successfully loggedIn');
            }else{
                mvNotifier.notify('Sorry login failed');
            }
        })
    }

    $scope.signout = function(){
        mvAuth.logoutUser().then(function(){
            $scope.userName = "";
            $scope.password = "";
            mvNotifier.notify('You have successfully logged out !');
            $location.path('/');
        });
    }
});