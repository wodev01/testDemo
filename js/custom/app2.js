var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.otherwise('/home');

    $stateProvider

        /*.state('/', {
            url: '/',
            templateUrl: 'home2.html',
            controller: 'homeController'
        })*/

        .state('Home', {
            url: '/Home',
            templateUrl: 'home2.html',
            controller: 'homeController'
        })

        .state('Employee', {
            url: '/Employee',
            templateUrl: 'employee.html',
            controller: 'employeeController'
        })

        .state('EmployeeDetail', {
            url: '/EmployeeDetail',
            templateUrl: 'employeeDetail.html',
            controller: 'employeeDetailController'
        })

        .state('Directive', {
            url: '/Directive',
            templateUrl: 'directive.html',
            controller: 'directiveController'
        })

        .state('Promise', {
            url: '/Promise',
            templateUrl: 'promise.html',
            controller: 'promiseController'
        })

        .state('AboutUs', {
            url: '/AboutUs',
            templateUrl: 'aboutUs.html',
            controller: 'aboutUsController'
        });

});

routerApp.controller('homeController', function($scope) {
    $scope.message = "This is home page";
});
routerApp.controller('employeeController', function($scope) {
    $scope.message = "This is Employee page";
});
routerApp.controller('employeeDetailController', function($scope) {
    $scope.message = "This is Employee Detail page";
});
routerApp.controller('directiveController', function($scope) {
    $scope.message = "This is directive page";
});
routerApp.controller('promiseController', function($scope) {
    $scope.message = "This is promise page";
});
routerApp.controller('aboutUsController', function($scope) {
    $scope.message = "This is about Us page";
});