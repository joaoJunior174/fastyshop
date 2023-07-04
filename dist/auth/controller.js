"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
class AuthController {
    constructor(service) {
        this.service = service;
    }
    async login(username) {
        try {
            const resp = await this.service?.login(username);
            return resp;
        }
        catch (error) {
            return error;
        }
    }
}
exports.AuthController = AuthController;
