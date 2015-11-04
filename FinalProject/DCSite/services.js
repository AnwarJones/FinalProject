var DCSiteApp;
(function (DCSiteApp) {
    var Services;
    (function (Services) {
        var AdminService = (function () {
            function AdminService($resource, $http) {
                this.$http = $http;
                this.AdminResource = $resource('/api/daycare/:id');
            }
            AdminService.prototype.listCenters = function () {
                return this.AdminResource.query();
            };
            AdminService.prototype.listCentersByType = function (type) {
                return this.$http.get("/api/daycare/filter/" + type);
            };
            AdminService.prototype.save = function (center) {
                return this.AdminResource.save(center).$promise;
            };
            AdminService.prototype.get = function (id) {
                return this.AdminResource.get({ id: id });
            };
            AdminService.prototype.remove = function (id) {
                return this.AdminResource.remove({ id: id }).$promise;
            };
            return AdminService;
        })();
        Services.AdminService = AdminService;
        angular.module("DCSiteApp").service("adminService", AdminService);
        var BlogService = (function () {
            function BlogService($resource) {
                this.BlogResource = $resource('/api/BlogPost/:id');
            }
            BlogService.prototype.listBlogs = function () {
                return this.BlogResource.query();
            };
            BlogService.prototype.save = function (blog) {
                return this.BlogResource.save(blog).$promise;
            };
            BlogService.prototype.get = function (id) {
                return this.BlogResource.get({ id: id });
            };
            BlogService.prototype.remove = function (id) {
                return this.BlogResource.remove({ id: id }).$promise;
            };
            return BlogService;
        })();
        Services.BlogService = BlogService;
        angular.module('DCSiteApp').service('blogService', BlogService);
        var BrowseService = (function () {
            function BrowseService($resource, $http) {
                this.$http = $http;
                this.BrowseResource = $resource('/api/daycare/:id');
            }
            BrowseService.prototype.listCenters = function () {
                return this.BrowseResource.query();
            };
            BrowseService.prototype.listCentersByType = function (type) {
                return this.$http.get("/api/daycare/filter/" + type);
            };
            BrowseService.prototype.save = function (center) {
                return this.BrowseResource.save(center).$promise;
            };
            BrowseService.prototype.get = function (id) {
                return this.BrowseResource.get({ id: id });
            };
            BrowseService.prototype.remove = function (id) {
                return this.BrowseResource.remove({ id: id }).$promise;
            };
            return BrowseService;
        })();
        Services.BrowseService = BrowseService;
        angular.module('DCSiteApp').service('BrowseService', BrowseService);
        var MapService = (function () {
            function MapService($resource) {
                var _this = this;
                this.mapResource = $resource('/api/daycare/:id');
                this.mapResource.query().$promise.then(function (results) {
                    _this.addressArray = results;
                    console.log(results[0].centerAddress.formattedAddress);
                });
            }
            MapService.prototype.listCenters = function () {
                return this.mapResource.query();
            };
            return MapService;
        })();
        Services.MapService = MapService;
        angular.module('DCSiteApp').service('mapService', MapService);
    })(Services = DCSiteApp.Services || (DCSiteApp.Services = {}));
})(DCSiteApp || (DCSiteApp = {}));
