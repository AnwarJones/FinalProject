var DCSiteApp;
(function (DCSiteApp) {
    var Controllers;
    (function (Controllers) {
        var BrowseController = (function () {
            function BrowseController(BrowseService) {
                this.BrowseService = BrowseService;
                this.centers = BrowseService.listCenters();
            }
            BrowseController.prototype.display = function () {
                var _this = this;
                if (this.selectedType == " ") {
                    this.centers = this.BrowseService.listCenters();
                }
                else {
                    this.BrowseService.listCentersByType(this.selectedType).then(function (results) {
                        _this.centers = results.data;
                    });
                }
            };
            return BrowseController;
        })();
        Controllers.BrowseController = BrowseController;
        var AdminController = (function () {
            function AdminController(adminService, $location) {
                this.adminService = adminService;
                this.$location = $location;
                this.centers = adminService.listCenters();
            }
            AdminController.prototype.geocode = function () {
                this.adminService.geocodeAddress(this.centerToAdd.centerAddress);
            };
            AdminController.prototype.addCenter = function () {
                var _this = this;
                debugger;
                //let address = this.centerToAdd.centerAddress;
                //let addressString = `${address.StreetAddress.replace(/ /g, "+") }+${address.City.replace(/ /g,"+")}+${address.State}+${address.ZipCode}`;
                //let geocodeAddress = https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
                this.geocode();
                this.adminService.save(this.centerToAdd).then(function () {
                    _this.$location.path('/admin');
                });
            };
            AdminController.prototype.display = function () {
                var _this = this;
                if (this.selectedType == " ") {
                    this.centers = this.adminService.listCenters();
                }
                else {
                    this.adminService.listCentersByType(this.selectedType).then(function (results) {
                        _this.centers = results.data;
                    });
                }
            };
            return AdminController;
        })();
        Controllers.AdminController = AdminController;
        var EditCenterController = (function () {
            function EditCenterController(adminService, $location, $routeParams) {
                this.adminService = adminService;
                this.$location = $location;
                this.centerToEdit = this.adminService.get($routeParams['id']);
            }
            EditCenterController.prototype.addCenter = function () {
                var _this = this;
                this.adminService.save(this.centerToEdit).then(function () {
                    _this.$location.path('/admin');
                });
            };
            return EditCenterController;
        })();
        Controllers.EditCenterController = EditCenterController;
        var BlogController = (function () {
            function BlogController(blogService, $location) {
                this.blogService = blogService;
                this.$location = $location;
                this.blogs = blogService.listBlogs();
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
                debugger;
                this.blogService.save(this.blogToAdd).then(function () {
                    _this.$location.path('/blog');
                });
            };
            return AddBlogController;
        })();
        Controllers.AddBlogController = AddBlogController;
        var EditBlogController = (function () {
            function EditBlogController(blogService, $location, $routeParams) {
                this.blogService = blogService;
                this.$location = $location;
                this.blogToEdit = this.blogService.get($routeParams['id']);
            }
            EditBlogController.prototype.save = function () {
                var _this = this;
                this.blogService.save(this.blogToEdit).then(function () {
                    _this.$location.path('/blog');
                });
            };
            return EditBlogController;
        })();
        Controllers.EditBlogController = EditBlogController;
        var DeleteBlogController = (function () {
            function DeleteBlogController(blogService, $location, $routeParams) {
                this.blogService = blogService;
                this.$location = $location;
                this.blogToDelete = this.blogService.get($routeParams['id']);
            }
            DeleteBlogController.prototype.remove = function () {
                var _this = this;
                this.blogService.remove(this.blogToDelete.id).then(function () {
                    _this.$location.path('/blog');
                });
            };
            return DeleteBlogController;
        })();
        Controllers.DeleteBlogController = DeleteBlogController;
        var DelCenterController = (function () {
            function DelCenterController(adminService, $location, $routeParams) {
                this.adminService = adminService;
                this.$location = $location;
                this.centerToDelete = this.adminService.get($routeParams['id']);
            }
            DelCenterController.prototype.remove = function () {
                var _this = this;
                this.adminService.remove(this.centerToDelete.id).then(function () {
                    _this.$location.path('/admin/');
                });
            };
            return DelCenterController;
        })();
        Controllers.DelCenterController = DelCenterController;
        var Page1Controller = (function () {
            function Page1Controller() {
            }
            return Page1Controller;
        })();
        Controllers.Page1Controller = Page1Controller;
        var MapController = (function () {
            function MapController(mapService) {
                var _this = this;
                this.mapService = mapService;
                this.map = { center: { latitude: 33.8550, longitude: -84.3900 }, zoom: 12 };
                this.markerList = [];
                this.addresses = [];
                this.centers = mapService.listCenters();
                mapService.listCenters().$promise.then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        var id = i;
                        var lat = results[i].centerAddress.latitude;
                        var long = results[i].centerAddress.longitude;
                        var coords = { latitude: lat, longitude: long };
                        var marker = { markerId: id, coordinates: coords };
                        _this.markerList.push(marker);
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
                    });
                });
            }
            return MapController;
        })();
        Controllers.MapController = MapController;
    })(Controllers = DCSiteApp.Controllers || (DCSiteApp.Controllers = {}));
})(DCSiteApp || (DCSiteApp = {}));
//# sourceMappingURL=controllers.js.map