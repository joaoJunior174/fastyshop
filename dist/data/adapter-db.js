"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAdapterDb = void 0;
const mongo_db_connection_1 = __importDefault(require("../config/mongodb/mongo-db-connection"));
const makeAdapterDb = () => {
    return new mongo_db_connection_1.default();
};
exports.makeAdapterDb = makeAdapterDb;
