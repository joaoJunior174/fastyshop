import express, { Router } from "express";
import { buildDelete, buildGet, buildMiddlewareDelete, buildMiddlewareGet, buildMiddlewarePost, buildMiddlewareUpdate, buildPost, buildUpdate } from "./express-routing-instance";
import { RequestTransform } from "../../shared/request";

export const makeRouter = (): any => {
    return express.Router()
}

export const makePostRouter = (router: Router, callback: any, uri: string, middleware?: any): any => {
    return typeof middleware === 'function' ?
     buildMiddlewarePost(router, middleware, callback, uri) : buildPost(router, callback, uri)
}

export const makeGetRouter = (router: Router, callback: any, uri: string, middleware?: any): any => {
    return typeof middleware === 'function' ?
     buildMiddlewareGet(router, middleware, callback, uri) : buildGet(router, callback, uri)
}

export const makeUpdateRouter = (router: Router, callback: any, uri: string, middleware?: any): any => {
    return typeof middleware === 'function' ?
     buildMiddlewareUpdate(router, middleware, callback, uri) : buildUpdate(router, callback, uri)
}

export const makeDeleteRouter = (router: Router, callback: any, uri: string, middleware?: any): any => {
    return typeof middleware === 'function' ?
     buildMiddlewareDelete(router, middleware, callback, uri) : buildDelete(router, callback, uri)
}

export const buildRouterRequestPattern = (request: any): any => {
    return new RequestTransform (request?.params, request?.body, request?.headers)
}