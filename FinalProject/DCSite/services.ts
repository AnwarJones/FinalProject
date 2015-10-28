namespace DCSiteApp.Services {
    export class AdminServices{
        private AdminResource;

        public listCenters() {
            return this.AdminResource.query();
        }
        public save(center) {
            return this.AdminResource.save(center).$promise;
        }
        public remove(id) {
            return this.AdminResource.remove({ id: id }).$promise;
        }
        
        constructor(daycareUrl: string, $resource: ng.resource.IResourceService) {
            this.AdminResource = $resource(daycareUrl)
        }

    }
    angular.module("DCSiteApp").service("AdminServices", AdminServices);
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
    angular.module("DCSiteApp").service("BlogService", BlogService);


    export class BrowseService {
        public BrowseResource

        public ListCenters() {
            return this.BrowseResource.query();
        }

        constructor(daycareUrl: string, $resource: ng.resource.IResourceService) {
            this.BrowseResource = $resource(daycareUrl);
        }
    }
    angular.module("DCSiteApp").service("BrowseService", BrowseService);
       



}