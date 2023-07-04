import { HttpResponse } from "../http";

export interface Network {
    uri: string
    body?: any
    callback?: any
    errorCallback?: any
    header?: any
}

export interface BaseRequest {
    doRequest(param?: any): Promise<HttpResponse>
}