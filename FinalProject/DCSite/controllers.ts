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

        constructor(private AdminService: DCSiteApp.Services.AdminServices,
            private $location: ng.ILocationService
        ) {
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
    export class DelCenterController {
        public centerToDelete;
        

        public remove() {
            debugger
            this.deleteService.remove(this.centerToDelete.id).then(() => {
                this.$location.path('/admin');
            });
        }

        constructor(private deleteService: DCSiteApp.Services.AdminServices,
            private $location: ng.ILocationService,
            $routeParams: angular.route.IRouteParamsService
        ) {
            this.centerToDelete = this.deleteService.get($routeParams['id'])
        }
    }





    export class Page1Controller {
        message = 'This is the main page useful for holding site mission statement and purpose';
    }

    export class MapController {

        public map = { center: { latitude: 33.7550, longitude: -84.3900 }, zoom: 10 };
        constructor() {
            
        }

    }


    

   


}