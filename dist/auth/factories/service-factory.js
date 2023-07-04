"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeService = void 0;
const service_1 = require("../service");
const db_factory_1 = require("./db-factory");
const makeService = () => {
    return new service_1.AuthService((0, db_factory_1.makeDb)());
};
exports.makeService = makeService;
