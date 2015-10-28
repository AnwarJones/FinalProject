var DCSiteApp;
(function (DCSiteApp) {
    var Controllers;
    (function (Controllers) {
        var AccountController = (function () {
            function AccountController(accountService, $location) {
                var _this = this;
                this.accountService = accountService;
                this.$location = $location;
                this.getExternalLogins().then(function (results) {
                    _this.externalLogins = results;
                });
            }
            AccountController.prototype.getClaim = function (type) {
                return this.accountService.getClaim(type);
            };
            AccountController.prototype.isLoggedIn = function () {
                return this.accountService.isLoggedIn();
            };
            AccountController.prototype.logout = function () {
                this.accountService.logout();
            };
            AccountController.prototype.getExternalLogins = function () {
                return this.accountService.getExternalLogins();
            };
            return AccountController;
        })();
        Controllers.AccountController = AccountController;
        angular.module('DCSiteApp').controller('AccountController', AccountController);
        var SigninController = (function () {
            function SigninController(accountService, $location) {
                this.accountService = accountService;
                this.$location = $location;
            }
            SigninController.prototype.login = function () {
                var _this = this;
                this.accountService.login(this.loginUser).then(function () {
                    _this.$location.path('/');
                }).catch(function (results) {
                    _this.validationMessages = results;
                });
            };
            SigninController.prototype.register = function () {
                var _this = this;
                this.accountService.register(this.registerUser).then(function () {
                    _this.$location.path('/signin');
                }).catch(function (results) {
                    _this.validationMessages = results;
                });
            };
            return SigninController;
        })();
        Controllers.SigninController = SigninController;
    })(Controllers = DCSiteApp.Controllers || (DCSiteApp.Controllers = {}));
})(DCSiteApp || (DCSiteApp = {}));
//# sourceMappingURL=accountController.js.map