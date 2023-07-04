"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerFromToken = void 0;
const generate_token_1 = require("../infra/jwt/generate-token");
const customerFromToken = (requestTransform) => {
    const token = requestTransform?.headers?.authorization;
    const customerDto = (0, generate_token_1.decodeToken)(token.replace('Bearer ', ''));
    return customerDto;
};
exports.customerFromToken = customerFromToken;
