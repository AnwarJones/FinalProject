namespace DCSiteApp.Controllers {
    class Page1Controller {
        message = 'This is the main page useful for holding site mission statement and purpose';
    }
    angular.module('DCSiteApp').controller('Page1Controller', Page1Controller);
    class Page2Controller {
        message = 'This is page 2 this will be the main browsing page. Users will be able to browse through lists of Daycares based on specified categories';
    }
    angular.module('DCSiteApp').controller('Page2Controller', Page2Controller);
    class Page3Controller {
        message = 'This is page 3 this page will feature a map that uses GoogleMaps api to display daycare centers near a certain address or in a user specified zipcode';
    }
    angular.module('DCSiteApp').controller('Page3Controller', Page3Controller);

    class Page4Controller {
        message = 'This is page 4 this page will be the log in page for users to log in or create a new user identity';
    }
    angular.module('DCSiteApp').controller('Page4Controller', Page4Controller);
    class Page5Controller {
        message = 'This is page 5 this page will be for site admins or child care centers to enter new information about themselves or update existing files';
    }
    angular.module('DCSiteApp').controller('Page5Controller', Page5Controller);


}