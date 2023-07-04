"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildRouterRequestPattern = exports.makeDeleteRouter = exports.makeUpdateRouter = exports.makeGetRouter = exports.makePostRouter = exports.makeRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_routing_instance_1 = require("./express-routing-instance");
const request_1 = require("../../shared/request");
const makeRouter = () => {
    return express_1.default.Router();
};
exports.makeRouter = makeRouter;
const makePostRouter = (router, callback, uri, middleware) => {
    return typeof middleware === 'function' ?
        (0, express_routing_instance_1.buildMiddlewarePost)(router, middleware, callback, uri) : (0, express_routing_instance_1.buildPost)(router, callback, uri);
};
exports.makePostRouter = makePostRouter;
const makeGetRouter = (router, callback, uri, middleware) => {
    return typeof middleware === 'function' ?
        (0, express_routing_instance_1.buildMiddlewareGet)(router, middleware, callback, uri) : (0, express_routing_instance_1.buildGet)(router, callback, uri);
};
exports.makeGetRouter = makeGetRouter;
const makeUpdateRouter = (router, callback, uri, middleware) => {
    return typeof middleware === 'function' ?
        (0, express_routing_instance_1.buildMiddlewareUpdate)(router, middleware, callback, uri) : (0, express_routing_instance_1.buildUpdate)(router, callback, uri);
};
exports.makeUpdateRouter = makeUpdateRouter;
const makeDeleteRouter = (router, callback, uri, middleware) => {
    return typeof middleware === 'function' ?
        (0, express_routing_instance_1.buildMiddlewareDelete)(router, middleware, callback, uri) : (0, express_routing_instance_1.buildDelete)(router, callback, uri);
};
exports.makeDeleteRouter = makeDeleteRouter;
const buildRouterRequestPattern = (request) => {
    return new request_1.RequestTransform(request?.params, request?.body, request?.headers);
};
exports.buildRouterRequestPattern = buildRouterRequestPattern;
