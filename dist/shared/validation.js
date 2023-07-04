"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyObject = void 0;
const isEmptyObject = (object) => {
    return Object.keys(object).length === 0;
};
exports.isEmptyObject = isEmptyObject;
