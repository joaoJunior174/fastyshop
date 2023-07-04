"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildOrQueryParam = void 0;
const buildOrQueryParam = (params) => {
    return { $or: [{ taxvat: params?.username }, { email: params?.username }] };
};
exports.buildOrQueryParam = buildOrQueryParam;
