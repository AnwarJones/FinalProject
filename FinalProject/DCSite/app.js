var DCSiteApp;
(function (DCSiteApp) {
    angular.module('DCSiteApp', ['ngRoute', 'ngResource']).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '/DCSite/main.html',
            controller: 'Page1Controller as vm'
        })
            .when('/main', {
            templateUrl: '/DCSite/main.html',
            controller: 'Page1Controller as vm'
        })
            .when('/browse', {
            templateUrl: '/DCSite/browse.html',
            controller: 'BrowseController as vm'
        })
            .when('/map', {
            templateUrl: '/DCSite/map.html',
            controller: 'MapController as vm'
        })
            .when('/signIn', {
            templateUrl: '/DCSite/signin.html',
            controller: 'SigninController as vm'
        })
            .when('/admin', {
            templateUrl: '/DCSite/admin.html',
            controller: 'adminController as vm'
        })
            .when('/blog', {
            templateUrl: '/DCSite/blog.html',
            controller: 'Page3Controller as vm'
        })
            .when('/tipstools', {
            templateUrl: '/DCSite/tipstools.html',
            controller: 'tipsController as vm'
        })
            .otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(DCSiteApp || (DCSiteApp = {}));
