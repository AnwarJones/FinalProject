var DCSiteApp;
(function (DCSiteApp) {
    angular.module('DCSiteApp', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
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
            controller: 'Page2Controller as vm'
        })
            .when('/map', {
            templateUrl: '/DCSite/map.html',
            controller: 'Page3Controller as vm'
        })
            .when('/signIn', {
            templateUrl: '/DCSite/signin.html',
            controller: 'Page4Controller as vm'
        })
            .when('/admin', {
            templateUrl: '/DCSite/admin.html',
            controller: 'Page5Controller as vm'
        })
            .otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(DCSiteApp || (DCSiteApp = {}));
//# sourceMappingURL=app.js.map