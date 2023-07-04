"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostAxios = void 0;
const axios_1 = __importDefault(require("axios"));
class PostAxios {
    async doRequest(network) {
        const response = axios_1.default.post(network.uri, network.body, network.header);
        console.log(response);
        return response;
    }
}
exports.PostAxios = PostAxios;
