"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
const http_1 = require("../shared/http");
class CartController {
    constructor(service) {
        this.service = service;
    }
    async generateCart(request) {
        try {
            const resp = await this.service?.generateCart(request);
            return resp;
        }
        catch (error) {
            return (0, http_1.serverError)(error);
        }
    }
    async add(productInCartDtoo, query) {
        try {
            const resp = await this.service?.add(productInCartDtoo, query);
            return resp;
        }
        catch (error) {
            return (0, http_1.serverError)(error);
        }
    }
    async removeItem(params, query) {
        try {
            const resp = await this.service?.removeItem(params, query);
            return resp;
        }
        catch (error) {
            return (0, http_1.serverError)(error);
        }
    }
    async resetCart(params, query) {
        try {
            const resp = await this.service?.resetCart(params, query);
            return resp;
        }
        catch (error) {
            return (0, http_1.serverError)(error);
        }
    }
    async saveShippingMethod(params, query) {
        try {
            const resp = await this.service?.saveShippingMethod(params, query);
            return resp;
        }
        catch (error) {
            return (0, http_1.serverError)(error);
        }
    }
    async savePaymentMethod(params, query) {
        try {
            const resp = await this.service?.savePaymentMethod(params, query);
            return resp;
        }
        catch (error) {
            return (0, http_1.serverError)(error);
        }
    }
    async delete(params) {
        try {
            await this.service?.delete(params);
            return (0, http_1.noContent)();
        }
        catch (error) {
            return (0, http_1.serverError)(error);
        }
    }
    async read(query) {
        try {
            const resp = await this.service?.read(query);
            return resp;
        }
        catch (error) {
            return (0, http_1.serverError)(error);
        }
    }
}
exports.CartController = CartController;
