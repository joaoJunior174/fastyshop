"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeController = void 0;
const controller_1 = require("../controller");
const service_factory_1 = require("./service-factory");
const makeController = () => {
    return new controller_1.CartController((0, service_factory_1.makeService)());
};
exports.makeController = makeController;
