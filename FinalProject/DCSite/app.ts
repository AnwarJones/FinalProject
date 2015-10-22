namespace DCSiteApp {
    angular.module('DCSiteApp', ['ngRoute', 'ngResource']).config(
        (
            $routeProvider: ng.route.IRouteProvider,
            $locationProvider: ng.ILocationProvider)=>{
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
                .when('/signin', {
                    templateUrl: '/DCSite/signin.html',
                    controller: 'SigninController as vm'
                })
                .when('/admin', {
                    templateUrl: '/DCSite/admin.html',
                    controller: 'AdminController as vm'
                })
                .when('/blog', {
                    templateUrl: '/DCSite/blog.html',
                    controller: 'BlogController as vm'
                })
                .when('/tipstools', {
                    templateUrl: '/DCSite/tipstools.html',
                    controller: 'tipsController as vm'
                })
                .otherwise('/');

            $locationProvider.html5Mode(true);
        }).constant('daycareUrl', 'https://api.myjson.com/bins/1zbne');


    angular.module('DCSiteApp').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                let token = $window.sessionStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = 'Bearer ' + token;
                }
                return config;
            },
            response: function (response) {
                if (response.status === 401) {
                    $location.path('/login');
                }
                return response || $q.when(response);
            }
        })
    );
    angular.module('DCSiteApp').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });

}