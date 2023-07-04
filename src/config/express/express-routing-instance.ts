import { Router } from "express";
import { serverError } from "../../shared/http";
import { isEmptyObject } from "../../shared/validation";
import { buildRouterRequestPattern } from "./router-factory";

export const buildPost = (router: Router, callback: any, uri: string): any => {
    return router.post(uri, async function (req: any, res: any, next: any) {
        res.send(await callback(buildRouterRequestPattern(req)))
    })
}

export const buildMiddlewarePost = (router: Router, middleware: any, callback: any, uri: string): any => {
    return router.post(uri, async function (req: any, res: any, next: any) {
        try {
            await middleware(req)
            next()
        } catch(error: any) {
            res.send(serverError(error))
        }
    }, 
    async function (req: any, res: any, next: any) {
        res.send(await callback(buildRouterRequestPattern(req)))
    })
}

export const buildGet = (router: Router, callback: any, uri: string): any => {
    return router.get(uri, async function (req: any, res: any, next: any) {
        res.send(await callback(buildRouterRequestPattern(req)))
    })
}

export const buildMiddlewareGet = (router: Router, middleware: any, callback: any, uri: string): any => {
    return router.get(uri, async function (req: any, res: any, next: any) {
        try {
            await middleware(req)
            next()
        } catch(error: any) {
            res.send(serverError(error))
        }
    }, 
    async function (req: any, res: any, next: any) {
        res.send(await callback(buildRouterRequestPattern(req)))
    })
}

export const buildUpdate = (router: Router, callback: any, uri: string): any => {
    return router.patch(uri, async function (req: any, res: any, next: any) {
        res.send(await callback(buildRouterRequestPattern(req)))
    })
}

export const buildMiddlewareUpdate = (router: Router, middleware: any, callback: any, uri: string): any => {
    return router.patch(uri, async function (req: any, res: any, next: any) {
        try {
            await middleware(req)
            next()
        } catch(error: any) {
            res.send(serverError(error))
        }
    }, 
    async function (req: any, res: any, next: any) {
        res.send(await callback(buildRouterRequestPattern(req)))
    })
}

export const buildDelete = (router: Router, callback: any, uri: string): any => {
    return router.delete(uri, async function (req: any, res: any, next: any) {
        res.send(await callback(buildRouterRequestPattern(req)))
    })
}

export const buildMiddlewareDelete = (router: Router, middleware: any, callback: any, uri: string): any => {
    return router.delete(uri, async function (req: any, res: any, next: any) {
        try {
            await middleware(req)
            next()
        } catch(error: any) {
            res.send(serverError(error))
        }
    }, 
    async function (req: any, res: any, next: any) {
        res.send(await callback(buildRouterRequestPattern(req)))
    })
}