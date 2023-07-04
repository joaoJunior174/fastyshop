"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDb = void 0;
const adapter_db_1 = require("../../data/adapter-db");
const makeDb = () => {
    return (0, adapter_db_1.makeAdapterDb)();
};
exports.makeDb = makeDb;
