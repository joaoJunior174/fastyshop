"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const build_query_param_1 = require("../customer/helpers/build-query-param");
const compare_password_1 = require("../infra/bcrypt/compare-password");
const unauthorized_error_1 = require("../shared/errors/unauthorized-error");
const generate_token_1 = require("../infra/jwt/generate-token");
const http_1 = require("../shared/http");
class AuthService {
    constructor(db) {
        this.collectionName = "customers";
        this.db = db;
    }
    async login(username) {
        try {
            const customerModel = await this.db?.find((0, build_query_param_1.buildOrQueryParam)(username), this.collectionName);
            if (!(await (0, compare_password_1.isSamePassword)(username.password, customerModel[0].password))) {
                throw new unauthorized_error_1.UnauthorizedError();
            }
            return (0, http_1.bearerToken)((0, generate_token_1.generateToken)(customerModel));
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
}
exports.AuthService = AuthService;
