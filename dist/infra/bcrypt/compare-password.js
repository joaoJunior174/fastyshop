"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSamePassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const isSamePassword = async (password, hash) => {
    return await bcrypt_1.default.compare(password, hash);
};
exports.isSamePassword = isSamePassword;
