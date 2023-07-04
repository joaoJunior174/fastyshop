"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCustomerToken = void 0;
const generate_token_1 = require("../../infra/jwt/generate-token");
const token_expired_enum_1 = require("../../shared/enums/token-expired-enum");
const user_role_enum_1 = require("../../shared/enums/user-role-enum");
const db_factory_1 = require("../factories/db-factory");
const checkCustomerToken = async (request) => {
    try {
        const decodedToken = (0, generate_token_1.decodeToken)(request?.headers?.authorization?.replace('Bearer ', ''));
        if (decodedToken?.role != user_role_enum_1.UserRole.SIMPLE) {
            throw user_role_enum_1.UserRole.MESSAGE_USER_DENIED;
        }
        const currentTime = Math.floor(Date.now() / 1000);
        if (decodedToken.exp && decodedToken.exp < currentTime) {
            throw token_expired_enum_1.TokenExpired.TOKEN_EXPIRED_MESSAGE;
        }
        const dataBaseInstance = (0, db_factory_1.makeDb)();
        const customer = await dataBaseInstance.find({ email: decodedToken?.email }, "customers");
        if (!customer) {
            throw token_expired_enum_1.TokenExpired.USER_NOT_FOUND_BY_TOKEN;
        }
    }
    catch (error) {
        console.log(error);
        throw { stack: error };
    }
};
exports.checkCustomerToken = checkCustomerToken;
