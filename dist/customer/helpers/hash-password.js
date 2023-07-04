"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = void 0;
const hash_password_1 = require("../../infra/bcrypt/hash-password");
const hashPassword = async (customerDto) => {
    customerDto.password = await (0, hash_password_1.generateHash)(customerDto.password);
    return Promise.resolve(customerDto);
};
exports.hashPassword = hashPassword;
