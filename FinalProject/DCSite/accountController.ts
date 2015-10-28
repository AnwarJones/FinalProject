namespace DCSiteApp.Controllers {
    export class AccountController {
        public externalLogins;

        public getClaim(type) {
            return this.accountService.getClaim(type);
        }

        public isLoggedIn() {
            return this.accountService.isLoggedIn();
        }

        public logout() {
            this.accountService.logout();
        }

        public getExternalLogins() {
            return this.accountService.getExternalLogins();
        }

        constructor(private accountService: DCSiteApp.Services.AccountService, private $location: ng.ILocationService) {
            this.getExternalLogins().then((results) => {
                this.externalLogins = results;
            });
        }
    }

    angular.module('DCSiteApp').controller('AccountController', AccountController);

    export class SigninController {
        public loginUser;
        public registerUser;
        public validationMessages;
        
        public login() {
            this.accountService.login(this.loginUser).then(() => {
                this.$location.path('/');
            }).catch((results) => {
                this.validationMessages = results;
            });
        }

        public register() {
            this.accountService.register(this.registerUser).then(() => {
                this.$location.path('/signin');
            }).catch((results) => {
                this.validationMessages = results;
            });
        }
        constructor(private accountService: DCSiteApp.Services.AccountService, private $location: ng.ILocationService) {

        }
    }
    
}