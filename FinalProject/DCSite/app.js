var DCSiteApp;
(function (DCSiteApp) {
    angular.module('DCSiteApp', ['ngRoute', 'ngResource']).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '/DCSite/Views/main.html',
            controller: DCSiteApp.Controllers.Page1Controller,
            controllerAs: 'vm'
        })
            .when('/main', {
            templateUrl: '/DCSite/Views/main.html',
            controller: DCSiteApp.Controllers.Page1Controller,
            controllerAs: 'vm'
        })
            .when('/browse', {
            templateUrl: '/DCSite/Views/browse.html',
            controller: DCSiteApp.Controllers.BrowseController,
            controllerAs: 'vm'
        })
            .when('/map', {
            templateUrl: '/DCSite/Views/map.html',
            controller: DCSiteApp.Controllers.MapController,
            controllerAs: "vm"
        })
            .when('/signin', {
            templateUrl: '/DCSite/Views/signin.html',
            controller: DCSiteApp.Controllers.SigninController,
            controllerAs: "vm"
        })
            .when('/admin', {
            templateUrl: '/DCSite/Views/admin.html',
            controller: DCSiteApp.Controllers.AdminController,
            controllerAs: 'vm'
        })
            .when('/blog', {
            templateUrl: '/DCSite/Views/blog.html',
            controller: DCSiteApp.Controllers.BlogController,
            controllerAs: 'vm'
        })
            .when('/tipstools', {
            templateUrl: '/DCSite/Views/tipstools.html',
            controller: 'tipsController as vm'
        })
            .otherwise('/');
        $locationProvider.html5Mode(true);
    }).constant('daycareUrl', 'https://api.myjson.com/bins/1zbne');
    angular.module('DCSiteApp').factory('authInterceptor', function ($q, $window, $location) {
        return ({
            request: function (config) {
                config.headers = config.headers || {};
                var token = $window.sessionStorage.getItem('token');
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
        });
    });
    angular.module('DCSiteApp').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });
})(DCSiteApp || (DCSiteApp = {}));
//# sourceMappingURL=app.js.map