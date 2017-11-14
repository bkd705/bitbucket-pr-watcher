"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IRoutes = /** @class */ (function () {
    function IRoutes() {
    }
    IRoutes.prototype.register = function (router) {
        var _this = this;
        this.getRoutes().forEach(function (route) {
            _this.registerRoute(route, router);
        });
    };
    IRoutes.prototype.registerRoute = function (route, router) {
        switch (route.method) {
            case 'get':
                router.get(route.path, route.action);
                break;
            case 'post':
                router.post(route.path, route.action);
                break;
            case 'put':
                router.put(route.path, route.action);
                break;
            case 'path':
                router.patch(route.path, route.action);
                break;
            case 'delete':
                router.delete(route.path, route.action);
                break;
        }
    };
    return IRoutes;
}());
exports.IRoutes = IRoutes;
//# sourceMappingURL=IRoutes.js.map