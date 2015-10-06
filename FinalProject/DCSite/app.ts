namespace DCSiteApp {
    angular.module('DCSiteApp', ['ngRoute']).config(
        ($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) =>
            {
            $routeProvider  
                .when('/', {
                    templateUrl: 'DCSiteApp/page1.html',
                    controller: 'Page1Controller as vm'
                })
                .when('page1', {
                    templateUrl: 'DCSiteApp/page1.html',
                    controller: 'Page1Controller as vm'
                })
                .when('page2', {
                    templateUrl: 'DCSiteApp/page2.html',
                    controller: 'Page2Controller as vm'
                })
                .when('page3', {
                    templateUrl: 'DCSiteApp/page3.html',
                    controller: 'Page3Controller as vm'
                })
                .when('page4', {
                    templateUrl: 'DCSiteApp/page4.html',
                    controller: 'Page4Controller as vm'
                })
                .when('page5', {
                    templateUrl: 'DCSiteApp/page4.html',
                    controller: 'Page5Controller as vm'
                })
                .otherwise('/');

            $locationProvider.html5Mode(true);




        });















}