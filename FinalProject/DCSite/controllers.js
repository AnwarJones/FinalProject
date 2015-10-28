var DCSiteApp;
(function (DCSiteApp) {
    var Controllers;
    (function (Controllers) {
        var BrowseController = (function () {
            function BrowseController(BrowseService) {
                this.BrowseService = BrowseService;
                this.centers = BrowseService.ListCenters();
            }
            return BrowseController;
        })();
        Controllers.BrowseController = BrowseController;
        var AdminController = (function () {
            function AdminController(AdminService, $location) {
                this.AdminService = AdminService;
                this.$location = $location;
                this.centers = AdminService.listCenters();
            }
            AdminController.prototype.addCenter = function () {
                var _this = this;
                this.AdminService.save(this.centerToAdd).then(function () {
                    _this.$location.path('/');
                });
            };
            return AdminController;
        })();
        Controllers.AdminController = AdminController;
        var BlogController = (function () {
            function BlogController(BlogService, $location) {
                this.BlogService = BlogService;
                this.$location = $location;
                this.blogs = BlogService.listBlogs();
            }
            return BlogController;
        })();
        Controllers.BlogController = BlogController;
        angular.module("DCSiteApp").controller("BlogController", BlogController);
        var AddBlogController = (function () {
            function AddBlogController(blogService, $location) {
                this.blogService = blogService;
                this.$location = $location;
            }
            AddBlogController.prototype.save = function () {
                var _this = this;
                this.blogService.save(this.blogToAdd).then(function () {
                    _this.$location.path('/');
                });
            };
            return AddBlogController;
        })();
        Controllers.AddBlogController = AddBlogController;
        var Page1Controller = (function () {
            function Page1Controller() {
                this.message = 'This is the main page useful for holding site mission statement and purpose';
            }
            return Page1Controller;
        })();
        Controllers.Page1Controller = Page1Controller;
        var MapController = (function () {
            function MapController() {
                this.message = 'This  page will feature a map that uses GoogleMaps api to display daycare centers near a certain address or in a user specified zipcode';
            }
            return MapController;
        })();
        Controllers.MapController = MapController;
    })(Controllers = DCSiteApp.Controllers || (DCSiteApp.Controllers = {}));
})(DCSiteApp || (DCSiteApp = {}));
//# sourceMappingURL=controllers.js.map