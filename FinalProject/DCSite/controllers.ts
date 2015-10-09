namespace DCSiteApp.Controller {
    class Page1Controller {
        message = 'This is the main page useful for holding site mission statement and purpose';
    }
    angular.module('DCSiteApp').controller('Page1Controller', Page1Controller);

    class BrowseController {

        public centers;

        constructor(private $resource: ng.resource.IResourceService) {
            let daycareResource = $resource(dayCareUrl);
            this.centers = daycareResource.query();
        }
    }
    angular.module('DCSiteApp').controller('BrowseController', BrowseController);

    class MapController {
        message = 'This is page 3 this page will feature a map that uses GoogleMaps api to display daycare centers near a certain address or in a user specified zipcode';
    }
    angular.module('DCSiteApp').controller('MapController', MapController);

    class SigninController {
        message = 'This is page 4 this page will be the log in page for users to log in or create a new user identity';
    }
    angular.module('DCSiteApp').controller('SigninController',SigninController);


    class AdminController {
        message = 'This is page 5 this page will be for site admins or child care centers to enter new information about themselves or update existing files';
    }
    angular.module('DCSiteApp').controller('AdminController', AdminController);


}