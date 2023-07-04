"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildEmptyCart = void 0;
const uuid_1 = require("uuid");
const cart_1 = __importDefault(require("../models/cart"));
const buildEmptyCart = (customerEmail) => {
    const cartDto = new cart_1.default((0, uuid_1.v4)(), customerEmail, [], 0);
    cartDto.active = true;
    return cartDto;
};
exports.buildEmptyCart = buildEmptyCart;
