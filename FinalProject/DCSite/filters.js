var DCSiteApp;
(function (DCSiteApp) {
    var Filters;
    (function (Filters) {
        function BizTypes() {
            return function (input) {
                switch (input) {
                    case 0: return "Home Based";
                    case 1: return "Chain";
                    case 2: return "Stand Alone";
                }
            };
        }
        angular.module('DCSiteApp').filter('BizTypes', BizTypes);
        function DateTime() {
            return function (input) {
                return new Date(input);
            };
        }
        angular.module('DCSiteApp').filter('DateTime', DateTime);
    })(Filters = DCSiteApp.Filters || (DCSiteApp.Filters = {}));
})(DCSiteApp || (DCSiteApp = {}));
