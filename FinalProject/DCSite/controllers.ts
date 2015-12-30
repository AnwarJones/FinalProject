namespace DCSiteApp.Controllers {


    export class BrowseController {

        public centers;
        public selectedType;


        public display() {

            if (this.selectedType == " ") {
                this.centers = this.BrowseService.listCenters();
            }
            else {
                this.BrowseService.listCentersByType(this.selectedType).then((results) => {
                    this.centers = results.data;
                });
            }
        }

        constructor(private BrowseService: DCSiteApp.Services.BrowseService) {
            this.centers = BrowseService.listCenters();


        }
    }

    export class AdminController {
        public centers;
        public centerToAdd;
        public selectedType;
        public address;

        public geocode() {
            this.adminService.geocodeAddress(this.centerToAdd.centerAddress);
        }

        public addCenter() {
            debugger
            //let address = this.centerToAdd.centerAddress;
            //let addressString = `${address.StreetAddress.replace(/ /g, "+") }+${address.City.replace(/ /g,"+")}+${address.State}+${address.ZipCode}`;
            //let geocodeAddress = https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

            this.geocode();
        

            this.adminService.save(this.centerToAdd).then(() => {
                this.$location.path('/admin');
            });
        }
        public display() {

            if (this.selectedType == " ") {
                this.centers = this.adminService.listCenters();
            }
            else {
                this.adminService.listCentersByType(this.selectedType).then((results) => {
                    this.centers = results.data;
                });
            }
        }

        constructor(private adminService: DCSiteApp.Services.AdminService,
            private $location: ng.ILocationService
        ) {
            this.centers = adminService.listCenters();
                        

        }

    }

    export class EditCenterController {
        public centerToEdit;

        public addCenter() {
            this.adminService.save(this.centerToEdit).then(() => {
                this.$location.path('/admin')
            });
        }

        constructor(private adminService: DCSiteApp.Services.AdminService,
            private $location: angular.ILocationService,
            $routeParams: angular.route.IRouteParamsService
        ) {
            this.centerToEdit=this.adminService.get($routeParams['id'])
        }
    }
   

    export class BlogController {
        private BlogResource;
        public blogs;

        constructor(private blogService: DCSiteApp.Services.BlogService, private $location: ng.ILocationService) {
            this.blogs = blogService.listBlogs();
            
        }


    }

    export class AddBlogController {
        public blogToAdd
        public save() {
            debugger
            this.blogService.save(this.blogToAdd).then(() => {
                this.$location.path('/blog');
            })
        }
        constructor(private blogService: DCSiteApp.Services.BlogService,
            private $location: angular.ILocationService
        ) { }
    }

    export class EditBlogController {
        public blogToEdit;

        public save() {
            this.blogService.save(this.blogToEdit).then(() => {
                this.$location.path('/blog');
            });
        }

        constructor(private blogService: DCSiteApp.Services.BlogService,
            private $location: angular.ILocationService,
            $routeParams: angular.route.IRouteParamsService
        ) {
            this.blogToEdit = this.blogService.get($routeParams['id'])
        }
    }
    
    export class DeleteBlogController {
        public blogToDelete;

        public remove() {
            this.blogService.remove(this.blogToDelete.id).then(() => {
                this.$location.path('/blog');
            });
        }

        constructor(private blogService: DCSiteApp.Services.BlogService,
            private $location: angular.ILocationService,
            $routeParams: angular.route.IRouteParamsService
        ) {
            this.blogToDelete = this.blogService.get($routeParams['id'])
        }
    }    
    



    export class DelCenterController {

        
        public centerToDelete;
        

        public remove() {
            
            this.adminService.remove(this.centerToDelete.id).then(() => {
                this.$location.path('/admin/');
            });
        }

        constructor(private adminService: DCSiteApp.Services.AdminService,
            private $location: ng.ILocationService,
            $routeParams: angular.route.IRouteParamsService
        ) {
            this.centerToDelete = this.adminService.get($routeParams['id']);
        }
    }





    export class Page1Controller {
    }

    export class MapController {
        public map = { center: { latitude: 33.8550, longitude: -84.3900 }, zoom: 12 };
        public markerList = [];
        public centers;
        public addresses = [];

       

        
        constructor(private mapService: DCSiteApp.Services.MapService) {
            this.centers = mapService.listCenters();
            mapService.listCenters().$promise.then((results) => {
                for (let i = 0; i < results.length; i++) {
                    let id = i;
                    let lat = results[i].centerAddress.latitude;
                    let long = results[i].centerAddress.longitude;
                    let coords = { latitude: lat, longitude: long };
                    let marker = { markerId: id, coordinates: coords };
                    this.markerList.push(marker)
                }
            });
            jQuery(document).ready(function ($) {
                $('.cd-btn').on('click', function (event) {
                    event.preventDefault();
                    $('.cd-panel').addClass('is-visible');
                });
                $('.cd-panel').on('click', function (event) {
                    if ($(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close')) {
                        $('.cd-panel').removeClass('is-visible');
                        event.preventDefault();
                    }
                })
            });           
        }
    }


    

   


}