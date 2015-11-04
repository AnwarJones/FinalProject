namespace DCSiteApp.Services {
    export class AdminService{
        private AdminResource;

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
        public addressArray;
        
        
        public listCenters() {
             
            return this.mapResource.query();
            
        }


        constructor($resource: ng.resource.IResourceService ) {
            this.mapResource = $resource('/api/daycare/:id');
            this.mapResource.query().$promise.then((results) => {
                this.addressArray = results
                console.log(results[0].centerAddress.formattedAddress);
            });
            
        }
    }
    angular.module('DCSiteApp').service('mapService', MapService);


}