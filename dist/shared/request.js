"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestTransform = void 0;
class RequestTransform {
    constructor(params, body, headers) {
        this.params = params;
        this.body = body;
        this.headers = headers;
    }
}
exports.RequestTransform = RequestTransform;
