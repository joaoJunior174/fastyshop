"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const routes_1 = require("../product/routes");
const express_1 = __importDefault(require("express"));
exports.routes = express_1.default.Router();
exports.routes.use('/products', routes_1.productRouter);
