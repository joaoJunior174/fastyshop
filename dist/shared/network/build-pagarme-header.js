"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPagarmeHeader = void 0;
const buildPagarmeHeader = (key) => {
    return {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'basic ' + Buffer.from(key + ":").toString('base64')
        }
    };
};
exports.buildPagarmeHeader = buildPagarmeHeader;
