var DCSiteApp;
(function (DCSiteApp) {
    var Services;
    (function (Services) {
        var AdminServices = (function () {
            function AdminServices(daycareUrl, $resource) {
                this.AdminResource = $resource(daycareUrl);
            }
            AdminServices.prototype.listCenters = function () {
                return this.AdminResource.query();
            };
            AdminServices.prototype.saveCenter = function (center) {
                return this.AdminResource.save(center).$promise;
            };
            AdminServices.prototype.deleteCenter = function (id) {
                return this.AdminResource.delete({ id: id }).$promise;
            };
            return AdminServices;
        })();
        Services.AdminServices = AdminServices;
        angular.module("DCSiteApp").service("AdminServices", AdminServices);
        var BlogService = (function () {
            function BlogService($resource) {
                this.BlogResource = $resource('/api/BlogPost/:id');
            }
            BlogService.prototype.listBlogs = function () {
                return this.BlogResource.query();
            };
            return BlogService;
        })();
        Services.BlogService = BlogService;
        angular.module("DCSiteApp").service("BlogService", BlogService);
        var BrowseService = (function () {
            function BrowseService(daycareUrl, $resource) {
                this.BrowseResource = $resource(daycareUrl);
            }
            BrowseService.prototype.ListCenters = function () {
                return this.BrowseResource.query();
            };
            return BrowseService;
        })();
        Services.BrowseService = BrowseService;
        angular.module("DCSiteApp").service("BrowseService", BrowseService);
    })(Services = DCSiteApp.Services || (DCSiteApp.Services = {}));
})(DCSiteApp || (DCSiteApp = {}));
