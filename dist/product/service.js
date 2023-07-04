"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const http_1 = require("../shared/http");
const http_2 = require("../shared/http");
const format_response_dto_1 = require("./helpers/format-response-dto");
const validation_1 = require("../shared/validation");
const merge_product_dto_1 = require("./helpers/merge-product-dto");
class ProductService {
    constructor(db) {
        this.collectionName = "products";
        this.db = db;
    }
    async add(productDto) {
        try {
            await this.db?.add(productDto, this.collectionName);
            return (0, http_2.noContent)();
        }
        catch (error) {
            return (0, http_2.serverError)(error);
        }
    }
    async update(params, productDto) {
        try {
            const product = (0, merge_product_dto_1.mergeProductDto)(productDto, await this.db?.find(params, this.collectionName));
            await this.db?.update(product, this.collectionName);
            return (0, http_2.noContent)();
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
exports.ProductService = ProductService;
