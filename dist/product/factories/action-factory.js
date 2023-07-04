"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductByName = exports.updateProductByName = exports.getProductByName = exports.getAllProduct = exports.addProduct = void 0;
const controller_factory_1 = require("./controller-factory");
const addProduct = async (requestTransform) => {
    const controller = (0, controller_factory_1.makeController)();
    return await controller.add(requestTransform.body);
};
exports.addProduct = addProduct;
const getAllProduct = async (requestTransform) => {
    const controller = (0, controller_factory_1.makeController)();
    return await controller.read(requestTransform.params);
};
exports.getAllProduct = getAllProduct;
const getProductByName = async (requestTransform) => {
    const controller = (0, controller_factory_1.makeController)();
    return await controller.read(requestTransform.params);
};
exports.getProductByName = getProductByName;
const updateProductByName = async (requestTransform) => {
    const controller = (0, controller_factory_1.makeController)();
    return await controller.update(requestTransform.params, requestTransform.body);
};
exports.updateProductByName = updateProductByName;
const deleteProductByName = async (requestTransform) => {
    const controller = (0, controller_factory_1.makeController)();
    return await controller.delete(requestTransform.params);
};
exports.deleteProductByName = deleteProductByName;
