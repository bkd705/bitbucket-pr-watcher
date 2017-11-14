"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./App");
var AppRoutes_1 = require("./routes/AppRoutes");
var port = Number(process.env.PORT) || 3000;
var server = new App_1.App(port, AppRoutes_1.AppRoutes.slice());
server.listen();
//# sourceMappingURL=index.js.map