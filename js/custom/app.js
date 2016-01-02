var app = angular.module('app',  ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider

        .state('login', {
            url: '/index',
            templateUrl: 'index.html',
            controller: 'loginController'
        })

        .state('home', {
            url: "/home",
            templateUrl: "home.html"
        });
});

/*app.controller('loginController', function($scope) {
    $scope.login = function() {
        console.log("hhh");
    };
})*/;

app.controller('loginController', ['$scope', '$location', loginController]);

function loginController($scope, $location) {
    console.log("hhh");
    $scope.users = [{
        UserName: 'a@gmail.com',
        Password: '123'
    }];

    $scope.LoginCheck = function() {
        $location.path("home");
    };

    $scope.go = function(path) {
        $location.path("/home");
    };
}
