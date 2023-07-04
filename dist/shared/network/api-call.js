"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiCall = void 0;
const post_1 = require("../../infra/axios/post");
class ApiCall {
    async post(body, uri, header) {
        const postAction = new post_1.PostAxios();
        return await postAction.doRequest({
            uri: uri,
            body,
            header,
            callback: (resp) => {
                return resp;
            },
            errorCallback: (error) => {
                console.log(error?.response?.data);
                return error;
            }
        });
    }
}
exports.ApiCall = ApiCall;
