"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const controller_factory_1 = require("./controller-factory");
const login = async (requestTransform) => {
    const controller = (0, controller_factory_1.makeController)();
    return await controller.login(requestTransform.body);
};
exports.login = login;
