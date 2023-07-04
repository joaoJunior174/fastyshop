"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAndQueryParam = void 0;
const buildAndQueryParam = (email, active) => {
    return { $and: [{ customerEmail: email }, { active: active }] };
};
exports.buildAndQueryParam = buildAndQueryParam;
