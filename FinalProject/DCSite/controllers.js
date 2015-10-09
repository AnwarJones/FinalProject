var DCSiteApp;
(function (DCSiteApp) {
    var Controller;
    (function (Controller) {
        var Page1Controller = (function () {
            function Page1Controller() {
                this.message = 'This is the main page useful for holding site mission statement and purpose';
            }
            return Page1Controller;
        })();
        angular.module('DCSiteApp').controller('Page1Controller', Page1Controller);
        var BrowseController = (function () {
            function BrowseController($resource) {
                this.$resource = $resource;
                var daycareResource = $resource(dayCareUrl);
                this.centers = daycareResource.query();
            }
            return BrowseController;
        })();
        angular.module('DCSiteApp').controller('BrowseController', BrowseController);
        var MapController = (function () {
            function MapController() {
                this.message = 'This is page 3 this page will feature a map that uses GoogleMaps api to display daycare centers near a certain address or in a user specified zipcode';
            }
            return MapController;
        })();
        angular.module('DCSiteApp').controller('MapController', MapController);
        var SigninController = (function () {
            function SigninController() {
                this.message = 'This is page 4 this page will be the log in page for users to log in or create a new user identity';
            }
            return SigninController;
        })();
        angular.module('DCSiteApp').controller('SigninController', SigninController);
        var AdminController = (function () {
            function AdminController() {
                this.message = 'This is page 5 this page will be for site admins or child care centers to enter new information about themselves or update existing files';
            }
            return AdminController;
        })();
        angular.module('DCSiteApp').controller('AdminController', AdminController);
    })(Controller = DCSiteApp.Controller || (DCSiteApp.Controller = {}));
})(DCSiteApp || (DCSiteApp = {}));
