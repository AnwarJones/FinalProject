namespace DCSiteApp.Controller {  
   

    class BrowseController {

        public centers;

        constructor(private BrowseService: DCSiteApp.Services.BrowseService) {
            this.centers = BrowseService.ListCenters();
        }
    }
    angular.module("DCSiteApp").controller("BrowseController", BrowseController);

    class AdminController {
        public centers;
        

        public centerToAdd
        public addCenter() {
            this.AdminService.saveCenter(this.centerToAdd).then(() => {
                this.$location.path('/');
            });
        }

        constructor(private AdminService: DCSiteApp.Services.AdminServices, private $location: ng.ILocationService) {
            this.centers = AdminService.listCenters;
        }
    
    }
    angular.module("DCSiteApp").controller("AdminController", AdminController);

    class BlogController {
        public blog

        constructor(private BlogService: DCSiteApp.Services.BlogService, private $location: ng.ILocationService) {
            this.blog = BlogService.listBlogs();
        }

        
    }
    angular.module("DCSiteApp").controller("BlogController", BlogController);


    class Page1Controller {
        message = 'This is the main page useful for holding site mission statement and purpose';
    }
    angular.module('DCSiteApp').controller('Page1Controller', Page1Controller);

    class MapController {
        message = 'This  page will feature a map that uses GoogleMaps api to display daycare centers near a certain address or in a user specified zipcode';
    }
    angular.module('DCSiteApp').controller('MapController', MapController);

    class SigninController {
        message = 'This page will be the log in page for users to log in or create a new user identity';
    }
    angular.module('DCSiteApp').controller('SigninController',SigninController);


    

   


}