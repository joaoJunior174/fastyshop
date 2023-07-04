"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const routes_1 = require("../../auth/routes");
const routes_2 = require("../../cart/routes");
const routes_3 = require("../../customer/routes");
const routes_4 = require("../../product/routes");
const express_1 = __importDefault(require("express"));
exports.routes = express_1.default.Router();
exports.routes.use('/products', routes_4.productRouter);
exports.routes.use('/customers', routes_3.customerRouter);
exports.routes.use('/auth', routes_1.authRouter);
exports.routes.use('/carts', routes_2.cartRouter);
