"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const router_factory_1 = require("../config/express/router-factory");
const action_factory_1 = require("./factories/action-factory");
exports.authRouter = (0, router_factory_1.makeRouter)();
(0, router_factory_1.makePostRouter)(exports.authRouter, action_factory_1.login, "/login");
