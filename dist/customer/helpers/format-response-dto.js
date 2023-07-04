"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatResponseToDto = exports.formatArrayResponseToDto = void 0;
const formatArrayResponseToDto = (dataFromDb) => {
    const varnishedArray = [];
    dataFromDb.forEach((value) => {
        const { role, _id, password, ...values } = value;
        varnishedArray.push({ ...values });
    });
    return varnishedArray;
};
exports.formatArrayResponseToDto = formatArrayResponseToDto;
const formatResponseToDto = (dataFromDb) => {
    const { role, _id, password, ...varnisheCustomer } = dataFromDb;
    return varnisheCustomer;
};
exports.formatResponseToDto = formatResponseToDto;
