"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const http_1 = require("../shared/http");
class CustomerController {
    constructor(service) {
        this.service = service;
    }
    async add(request) {
        try {
            const resp = await this.service?.add(request);
            return resp;
        }
        catch (error) {
            return (0, http_1.serverError)(error);
        }
    }
    async update(params, request) {
        try {
            const resp = await this.service?.update(params, request);
            return resp;
        }
        catch (error) {
            return (0, http_1.serverError)(error);
        }
    }
    async updateAddress(query, customerAddressDto) {
        try {
            const resp = await this.service?.updateAddress(query, customerAddressDto);
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
    async deleteAddress(query, params) {
        try {
            await this.service?.deleteAddress(query, params);
            return (0, http_1.noContent)();
        }
        catch (error) {
            return (0, http_1.serverError)(error);
        }
    }
    async read(params) {
        try {
            const resp = await this.service?.read(params);
            return resp;
        }
        catch (error) {
            return (0, http_1.serverError)(error);
        }
    }
}
exports.CustomerController = CustomerController;
