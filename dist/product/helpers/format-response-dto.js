"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatArrayResponseToDto = void 0;
const formatArrayResponseToDto = (dataFromDb) => {
    const varnishedArray = [];
    dataFromDb.forEach((value) => {
        const { _id, ...values } = value;
        varnishedArray.push({ ...values });
    });
    return varnishedArray;
};
exports.formatArrayResponseToDto = formatArrayResponseToDto;
