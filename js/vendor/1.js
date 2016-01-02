
var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    // For any unmatched url, send to /index
    $urlRouterProvider.otherwise("/login");

    $stateProvider
        .state('login', {
            url: "/index",
            templateUrl: "index.html",
            controller: "LoginCheckController"
        })
        .state('SuccessPage', {
            url: "/SuccessPage",
            templateUrl: "SuccessPage.html"
        });
});

app.controller('LoginCheckController', ['$scope', '$location', LoginCheckController]);

function LoginCheckController($scope, $location) {

    $scope.users = [{
        UserName: '123@gmail.com',
        Password: 'hi'
    }, {
        UserName: '159@gmail.com',
        Password: 'hi'
    }, {
        UserName: '753@gmail.com',
        Password: 'hi'
    }];

    $scope.LoginCheck = function() {
        $location.path("SuccessPage");
    };

    $scope.go = function(path) {
        $location.path("/SuccessPage");
    };
}