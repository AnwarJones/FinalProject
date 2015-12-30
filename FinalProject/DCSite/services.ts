namespace DCSiteApp.Services {
    export class AdminService{
        private AdminResource;
        //private GeocodeResource;

        public geocodeAddress(address) {

            let addressString = `${address.StreetAddress.replace(/ /g, "+") }+${address.City.replace(/ /g, "+") }+${address.State}+${address.ZipCode}`
            let key = 'AIzaSyB17QKB9z23NXiouMytuwJMd-C3-Zrea9c';
            let data = this.$http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "& key=" + "key");
            console.log(data);

        }

        public listCenters() {
            return this.AdminResource.query();
        }

        public listCentersByType(type) {
            return this.$http.get(`/api/daycare/filter/${type}`);
        }
        public save(center) {
            return this.AdminResource.save(center).$promise;
        }
        public get(id) {
            return this.AdminResource.get({ id: id });
        }

        public remove(id) {
            return this.AdminResource.remove({ id: id }).$promise;
        }
        constructor($resource: ng.resource.IResourceService, private $http: ng.IHttpService) {
            this.AdminResource = $resource('/api/daycare/:id');
            //this.GeocodeResource = $resource('https://maps.googleapis.com/maps/api/geocode/json?address=');
        }
    }
    angular.module("DCSiteApp").service("adminService", AdminService);


    export class BlogService {
        private BlogResource

        public listBlogs() {
            return this.BlogResource.query();
        }
        public save(blog) {
            return this.BlogResource.save(blog).$promise;
        }
        public get(id) {
            return this.BlogResource.get({ id: id });
        }
        public remove(id) {
            return this.BlogResource.remove({ id: id }).$promise;
        }

        constructor($resource: angular.resource.IResourceService) {
            this.BlogResource = $resource('/api/BlogPost/:id')

        }
    }
    angular.module('DCSiteApp').service('blogService', BlogService);


    export class BrowseService {
        public BrowseResource;

        public listCenters() {
            return this.BrowseResource.query();
        }

        public listCentersByType(type) {
            return this.$http.get(`/api/daycare/filter/${type}`);
        }
        public save(center) {
            return this.BrowseResource.save(center).$promise;
        }
        public get(id) {
            return this.BrowseResource.get({ id: id });
        }

        public remove(id) {
            return this.BrowseResource.remove({ id: id }).$promise;
        }
       

        constructor($resource: ng.resource.IResourceService, private $http: ng.IHttpService) {
            this.BrowseResource = $resource('/api/daycare/:id');
        }
    }
    angular.module('DCSiteApp').service('BrowseService', BrowseService);
       
    export class MapService {
        public mapResource
        public centers;
        public addressArray=[];
        
        
        public listCenters() {
             
            return this.mapResource.query();
            
        }



        constructor($resource: ng.resource.IResourceService ) {
            this.mapResource = $resource('/api/daycare/:id');
            //this.mapResource.query().$promise.then((results) => {
            //    for (let i = 0; i < results.length; i++) {
            //        this.addressArray.push(results[i].centerAddress.formattedAddress);
            //    }
            //    console.log(this.addressArray);
            //});
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
    angular.module('DCSiteApp').service('mapService', MapService);


}