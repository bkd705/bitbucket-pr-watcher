"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Route_1 = require("../models/Route");
var BitbucketController_1 = require("../controllers/BitbucketController");
exports.BitbucketRoutes = [
    new Route_1.Route('post', '/webook', BitbucketController_1.BitbucketController.webhook),
];
//# sourceMappingURL=BitbucketRoutes.js.map