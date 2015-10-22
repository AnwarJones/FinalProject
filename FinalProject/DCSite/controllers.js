var DCSiteApp;
(function (DCSiteApp) {
    var Controller;
    (function (Controller) {
        var BrowseController = (function () {
            function BrowseController(BrowseService) {
                this.BrowseService = BrowseService;
                this.centers = BrowseService.ListCenters();
            }
            return BrowseController;
        })();
        angular.module("DCSiteApp").controller("BrowseController", BrowseController);
        var AdminController = (function () {
            function AdminController(AdminService, $location) {
                this.AdminService = AdminService;
                this.$location = $location;
                this.centers = AdminService.listCenters;
            }
            AdminController.prototype.addCenter = function () {
                var _this = this;
                this.AdminService.saveCenter(this.centerToAdd).then(function () {
                    _this.$location.path('/');
                });
            };
            return AdminController;
        })();
        angular.module("DCSiteApp").controller("AdminController", AdminController);
        var BlogController = (function () {
            function BlogController(BlogService, $location) {
                this.BlogService = BlogService;
                this.$location = $location;
                this.blog = BlogService.listBlogs();
            }
            return BlogController;
        })();
        angular.module("DCSiteApp").controller("BlogController", BlogController);
        var Page1Controller = (function () {
            function Page1Controller() {
                this.message = 'This is the main page useful for holding site mission statement and purpose';
            }
            return Page1Controller;
        })();
        angular.module('DCSiteApp').controller('Page1Controller', Page1Controller);
        var MapController = (function () {
            function MapController() {
                this.message = 'This  page will feature a map that uses GoogleMaps api to display daycare centers near a certain address or in a user specified zipcode';
            }
            return MapController;
        })();
        angular.module('DCSiteApp').controller('MapController', MapController);
        var SigninController = (function () {
            function SigninController() {
                this.message = 'This page will be the log in page for users to log in or create a new user identity';
            }
            return SigninController;
        })();
        angular.module('DCSiteApp').controller('SigninController', SigninController);
    })(Controller = DCSiteApp.Controller || (DCSiteApp.Controller = {}));
})(DCSiteApp || (DCSiteApp = {}));
