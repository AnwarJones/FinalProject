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
        var DelCenterController = (function () {
            function DelCenterController(deleteService, $location, $routeParams) {
                this.deleteService = deleteService;
                this.$location = $location;
                this.centerToDelete = this.deleteService.get($routeParams['id']);
            }
            DelCenterController.prototype.remove = function () {
                var _this = this;
                debugger;
                this.deleteService.remove(this.centerToDelete.id).then(function () {
                    _this.$location.path('/admin');
                });
            };
            return DelCenterController;
        })();
        Controllers.DelCenterController = DelCenterController;
        var Page1Controller = (function () {
            function Page1Controller() {
                this.message = 'This is the main page useful for holding site mission statement and purpose';
            }
            return Page1Controller;
        })();
        Controllers.Page1Controller = Page1Controller;
        var MapController = (function () {
            function MapController() {
                this.map = { center: { latitude: 33.7550, longitude: -84.3900 }, zoom: 10 };
            }
            return MapController;
        })();
        Controllers.MapController = MapController;
    })(Controllers = DCSiteApp.Controllers || (DCSiteApp.Controllers = {}));
})(DCSiteApp || (DCSiteApp = {}));
