var DCSiteApp;
(function (DCSiteApp) {
    angular.module('DCSiteApp', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '/DCSite/page1.html',
            controller: 'Page1Controller as vm'
        })
            .when('/page1', {
            templateUrl: '/DCSite/page1.html',
            controller: 'Page1Controller as vm'
        })
            .when('/page2', {
            templateUrl: '/DCSite/page2.html',
            controller: 'Page2Controller as vm'
        })
            .when('/page3', {
            templateUrl: '/DCSite/page3.html',
            controller: 'Page3Controller as vm'
        })
            .when('/page4', {
            templateUrl: '/DCSite/page4.html',
            controller: 'Page4Controller as vm'
        })
            .when('/page5', {
            templateUrl: '/DCSite/page5.html',
            controller: 'Page5Controller as vm'
        })
            .otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(DCSiteApp || (DCSiteApp = {}));
