import { HttpResponse } from "./http"


export interface Controller<T = any> {
    add: (request: T) => Promise<HttpResponse>
    update: (params: T, request: T) => Promise<HttpResponse>
    delete: (request: T) => Promise<HttpResponse>
    read: (request: T) => Promise<HttpResponse>
}