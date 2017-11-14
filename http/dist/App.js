"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Koa = require("koa");
var BodyParser = require("koa-bodyparser");
var Router = require("koa-router");
var App = /** @class */ (function () {
    function App(port, routes) {
        this.port = port;
        this.Koa = new Koa();
        this.router = new Router();
        this.setupRoutes(routes);
        this.setupMiddleware();
    }
    App.prototype.listen = function () {
        var _this = this;
        this.Koa.listen(this.port, function () {
            return console.log("Listening on port " + _this.port);
        });
    };
    App.prototype.setupMiddleware = function () {
        this.Koa.use(BodyParser());
        this.Koa.use(this.router.routes());
    };
    App.prototype.setupRoutes = function (routes) {
        var _this = this;
        routes.forEach(function (route) {
            switch (route.method) {
                case 'get':
                    _this.router.get(route.path, route.action);
                    break;
                case 'post':
                    _this.router.post(route.path, route.action);
                    break;
                case 'put':
                    _this.router.put(route.path, route.action);
                    break;
                case 'patch':
                    _this.router.patch(route.path, route.action);
                    break;
                case 'delete':
                    _this.router.delete(route.path, route.action);
                    break;
                default:
                    break;
            }
        });
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=App.js.map