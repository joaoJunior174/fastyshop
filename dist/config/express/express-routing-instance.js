"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMiddlewareDelete = exports.buildDelete = exports.buildMiddlewareUpdate = exports.buildUpdate = exports.buildMiddlewareGet = exports.buildGet = exports.buildMiddlewarePost = exports.buildPost = void 0;
const http_1 = require("../../shared/http");
const router_factory_1 = require("./router-factory");
const buildPost = (router, callback, uri) => {
    return router.post(uri, async function (req, res, next) {
        res.send(await callback((0, router_factory_1.buildRouterRequestPattern)(req)));
    });
};
exports.buildPost = buildPost;
const buildMiddlewarePost = (router, middleware, callback, uri) => {
    return router.post(uri, async function (req, res, next) {
        try {
            await middleware(req);
            next();
        }
        catch (error) {
            res.send((0, http_1.serverError)(error));
        }
    }, async function (req, res, next) {
        res.send(await callback((0, router_factory_1.buildRouterRequestPattern)(req)));
    });
};
exports.buildMiddlewarePost = buildMiddlewarePost;
const buildGet = (router, callback, uri) => {
    return router.get(uri, async function (req, res, next) {
        res.send(await callback((0, router_factory_1.buildRouterRequestPattern)(req)));
    });
};
exports.buildGet = buildGet;
const buildMiddlewareGet = (router, middleware, callback, uri) => {
    return router.get(uri, async function (req, res, next) {
        try {
            await middleware(req);
            next();
        }
        catch (error) {
            res.send((0, http_1.serverError)(error));
        }
    }, async function (req, res, next) {
        res.send(await callback((0, router_factory_1.buildRouterRequestPattern)(req)));
    });
};
exports.buildMiddlewareGet = buildMiddlewareGet;
const buildUpdate = (router, callback, uri) => {
    return router.patch(uri, async function (req, res, next) {
        res.send(await callback((0, router_factory_1.buildRouterRequestPattern)(req)));
    });
};
exports.buildUpdate = buildUpdate;
const buildMiddlewareUpdate = (router, middleware, callback, uri) => {
    return router.patch(uri, async function (req, res, next) {
        try {
            await middleware(req);
            next();
        }
        catch (error) {
            res.send((0, http_1.serverError)(error));
        }
    }, async function (req, res, next) {
        res.send(await callback((0, router_factory_1.buildRouterRequestPattern)(req)));
    });
};
exports.buildMiddlewareUpdate = buildMiddlewareUpdate;
const buildDelete = (router, callback, uri) => {
    return router.delete(uri, async function (req, res, next) {
        res.send(await callback((0, router_factory_1.buildRouterRequestPattern)(req)));
    });
};
exports.buildDelete = buildDelete;
const buildMiddlewareDelete = (router, middleware, callback, uri) => {
    return router.delete(uri, async function (req, res, next) {
        try {
            await middleware(req);
            next();
        }
        catch (error) {
            res.send((0, http_1.serverError)(error));
        }
    }, async function (req, res, next) {
        res.send(await callback((0, router_factory_1.buildRouterRequestPattern)(req)));
    });
};
exports.buildMiddlewareDelete = buildMiddlewareDelete;
