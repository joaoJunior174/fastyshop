type Header = {
    authorization?: string
    type?: string
}

export class RequestTransform {
    params?: any
    body?: any
    headers?: Header

    constructor(params?: any, body?: any, headers?: any) {
        this.params = params
        this.body = body
        this.headers = headers
    }
}