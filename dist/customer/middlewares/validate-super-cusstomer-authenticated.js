"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSuperCustomerToken = void 0;
const generate_token_1 = require("../../infra/jwt/generate-token");
const token_expired_enum_1 = require("../../shared/enums/token-expired-enum");
const user_role_enum_1 = require("../../shared/enums/user-role-enum");
const checkSuperCustomerToken = (request) => {
    try {
        const decodedToken = (0, generate_token_1.decodeToken)(request?.headers?.authorization?.replace('Bearer ', ''));
        if (decodedToken?.role != user_role_enum_1.UserRole.ADMIN) {
            throw user_role_enum_1.UserRole.MESSAGE_USER_DENIED;
        }
        const currentTime = Math.floor(Date.now() / 1000);
        if (decodedToken.exp && decodedToken.exp < currentTime) {
            throw token_expired_enum_1.TokenExpired.TOKEN_EXPIRED_MESSAGE;
        }
    }
    catch (error) {
        console.log(error);
        throw { stack: error };
    }
};
exports.checkSuperCustomerToken = checkSuperCustomerToken;
