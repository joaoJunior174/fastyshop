"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatResponseToDto = void 0;
const formatResponseToDto = (cartDto) => {
    const { _id, ...varnisheCart } = cartDto;
    return varnisheCart;
};
exports.formatResponseToDto = formatResponseToDto;
