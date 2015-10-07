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
        var Page2Controller = (function () {
            function Page2Controller() {
                this.message = 'This is page 2 this will be the main browsing page. Users will be able to browse through lists of Daycares based on specified categories';
            }
            return Page2Controller;
        })();
        angular.module('DCSiteApp').controller('Page2Controller', Page2Controller);
        var Page3Controller = (function () {
            function Page3Controller() {
                this.message = 'This is page 3 this page will feature a map that uses GoogleMaps api to display daycare centers near a certain address or in a user specified zipcode';
            }
            return Page3Controller;
        })();
        angular.module('DCSiteApp').controller('Page3Controller', Page3Controller);
        var Page4Controller = (function () {
            function Page4Controller() {
                this.message = 'This is page 4 this page will be the log in page for users to log in or create a new user identity';
            }
            return Page4Controller;
        })();
        angular.module('DCSiteApp').controller('Page4Controller', Page4Controller);
        var Page5Controller = (function () {
            function Page5Controller() {
                this.message = 'This is page 5 this page will be for site admins or child care centers to enter new information about themselves or update existing files';
            }
            return Page5Controller;
        })();
        angular.module('DCSiteApp').controller('Page5Controller', Page5Controller);
    })(Controller = DCSiteApp.Controller || (DCSiteApp.Controller = {}));
})(DCSiteApp || (DCSiteApp = {}));
