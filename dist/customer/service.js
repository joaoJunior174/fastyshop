"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const http_1 = require("../shared/http");
const http_2 = require("../shared/http");
const format_response_dto_1 = require("./helpers/format-response-dto");
const validation_1 = require("../shared/validation");
const merge_customer_dto_1 = require("./helpers/merge-customer-dto");
const hash_password_1 = require("./helpers/hash-password");
class CustomerService {
    constructor(db) {
        this.collectionName = "customers";
        this.db = db;
    }
    async add(customerDto) {
        try {
            const customerPasswordHashed = await (0, hash_password_1.hashPassword)(customerDto);
            await this.db?.add(customerPasswordHashed, this.collectionName);
            return (0, http_1.ok)((0, format_response_dto_1.formatResponseToDto)(customerPasswordHashed));
        }
        catch (error) {
            return (0, http_2.serverError)(error);
        }
    }
    async update(params, customerDto) {
        try {
            const customer = (0, merge_customer_dto_1.mergeCustomerDto)(customerDto, await this.db?.find(params, this.collectionName));
            await this.db?.update(customer, this.collectionName);
            const { role, password, ...varnishedDto } = customerDto;
            return (0, http_1.ok)(varnishedDto);
        }
        catch (error) {
            return (0, http_2.serverError)(error);
        }
    }
    async updateAddress(query, customerAddressDto) {
        try {
            if (!customerAddressDto?.id) {
                throw "Specify the address id in body";
            }
            const customerDto = await this.db?.find(query, this.collectionName);
            if (customerDto) {
                const addressIndex = customerDto[0].addresses.findIndex((address) => address.id === customerAddressDto.id);
                if (addressIndex <= -1) {
                    throw "There is no address with this id";
                }
                customerDto[0].addresses[addressIndex] = (0, merge_customer_dto_1.mergeCustomerAddressDto)(customerAddressDto, customerDto[0].addresses[addressIndex]);
            }
            await this.db?.update(customerDto[0], this.collectionName);
            const { role, password, ...varnishedDto } = customerDto;
            return (0, http_1.ok)(varnishedDto);
        }
        catch (error) {
            return (0, http_2.serverError)(error);
        }
    }
    async delete(params) {
        try {
            await this.db?.delete(params, this.collectionName);
            return (0, http_2.noContent)();
        }
        catch (error) {
            return (0, http_2.serverError)(error);
        }
    }
    async deleteAddress(query, params) {
        try {
            const customerDto = await this.db?.find(query, this.collectionName);
            if (customerDto) {
                const addressIndex = customerDto[0].addresses.findIndex((address) => address.id === params.id);
                if (addressIndex <= -1) {
                    throw "There is no address with this id";
                }
                customerDto[0].addresses.splice(addressIndex, 1);
            }
            await this.db?.update(customerDto[0], this.collectionName);
            const { role, password, ...varnishedDto } = customerDto[0];
            return (0, http_1.ok)(varnishedDto);
        }
        catch (error) {
            return (0, http_2.serverError)(error);
        }
    }
    async read(params) {
        try {
            if ((0, validation_1.isEmptyObject)(params)) {
                return (0, http_1.ok)((0, format_response_dto_1.formatArrayResponseToDto)(await this.db?.findAll(this.collectionName)));
            }
            return (0, http_1.ok)((0, format_response_dto_1.formatArrayResponseToDto)(await this.db?.find(params, this.collectionName)));
        }
        catch (error) {
            return (0, http_2.serverError)(error);
        }
    }
}
exports.CustomerService = CustomerService;
