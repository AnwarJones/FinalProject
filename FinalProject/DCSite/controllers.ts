namespace DCSiteApp.Controllers {  
   

    export class BrowseController {

        public centers;

        constructor(private BrowseService: DCSiteApp.Services.BrowseService) {
            this.centers = BrowseService.ListCenters();
        }
    }

    export class AdminController {
        public centers;
        public centerToAdd;


        public addCenter() {
            this.AdminService.save(this.centerToAdd).then(() => {
                this.$location.path('/');
            });
        }

        constructor(private AdminService: DCSiteApp.Services.AdminServices, private $location: ng.ILocationService) {
            this.centers = AdminService.listCenters();
        }
    
    }
    

    export class BlogController {
        private BlogResource;
        public blogs;

        constructor(private BlogService: DCSiteApp.Services.BlogService, private $location: ng.ILocationService) {
            this.blogs = BlogService.listBlogs();
        }

        
    }
    angular.module("DCSiteApp").controller("BlogController", BlogController);

    export class AddBlogController {
        public blogToAdd
        public save() {
            this.blogService.save(this.blogToAdd).then(() => {
                this.$location.path('/');
            })
        }
        constructor(private blogService: DCSiteApp.Services.BlogService,
            private $location: angular.ILocationService
        ) {

        }
    }





    export class Page1Controller {
        message = 'This is the main page useful for holding site mission statement and purpose';
    }

    export class MapController {
        message = 'This  page will feature a map that uses GoogleMaps api to display daycare centers near a certain address or in a user specified zipcode';
    }


    

   


}