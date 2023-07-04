"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (customerDto) => {
    const privateKey = process.env.PRIVATE_KEY;
    const expirationTime = process.env.TOKEN_EXPIRATION_TIME;
    return jsonwebtoken_1.default.sign({ taxvat: customerDto[0].taxvat, email: customerDto[0].email, role: customerDto[0].role }, privateKey, { expiresIn: expirationTime });
};
exports.generateToken = generateToken;
const decodeToken = (token) => {
    if (!token) {
        return;
    }
    const privateKey = process.env.PRIVATE_KEY;
    return jsonwebtoken_1.default.verify(token, privateKey);
};
exports.decodeToken = decodeToken;
