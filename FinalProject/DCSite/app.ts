namespace DCSiteApp {
    angular.module('DCSiteApp', ['ngRoute', 'ngResource', 'uiGmapgoogle-maps']).config(
        (
            uiGmapGoogleMapApiProvider: any,
            $routeProvider: ng.route.IRouteProvider,
            $locationProvider: ng.ILocationProvider)=>{
            uiGmapGoogleMapApiProvider.configure({
                //    key: 'your api key',
                v: '3.20', //defaults to latest 3.X anyhow
                libraries: 'weather,geometry,visualization'
            });

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
                .when('/addBlog', {
                    templateUrl: '/DCSite/Views/addBlog.html',
                    controller: DCSiteApp.Controllers.AddBlogController,
                    controllerAs: 'vm'
                })
                .when('/editBlog/:id', {
                    templateUrl: '/DCSite/Views/editBlog.html',
                    controller: DCSiteApp.Controllers.EditBlogController,
                    controllerAs: 'vm'
                })
                .when('/deleteBlog/:id', {
                    templateUrl: '/DCSite/Views/deleteBlog.html',
                    controller: DCSiteApp.Controllers.DeleteBlogController,
                    controllerAs: 'vm'
                })
                .when('/deleteCenter/:id', {
                    templateUrl: '/DCSite/Views/deleteCenter.html',
                    controller: DCSiteApp.Controllers.DelCenterController,
                    controllerAs: 'vm'
                })
                .when('/editCenter/:id', {
                    templateUrl: '/DCSite/Views/editCenter.html',
                    controller: DCSiteApp.Controllers.EditCenterController,
                    controllerAs: 'vm'
                })
                .otherwise('/');

            $locationProvider.html5Mode(true);
        })


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