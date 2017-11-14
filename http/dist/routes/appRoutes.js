"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Route_1 = require("../models/Route");
var AppController_1 = require("../controllers/AppController");
exports.AppRoutes = [new Route_1.Route('get', '/', AppController_1.AppController.index)];
//# sourceMappingURL=AppRoutes.js.map