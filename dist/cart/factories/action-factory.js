"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.savePaymentMethod = exports.saveShippingMethod = exports.resetCart = exports.removeItem = exports.getActiveCart = exports.addItem = exports.generateCart = void 0;
const customer_from_token_1 = require("../../shared/customer-from-token");
const build_empty_cart_1 = require("../helpers/build-empty-cart");
const build_query_param_1 = require("../helpers/build-query-param");
const controller_factory_1 = require("./controller-factory");
const generateCart = async (requestTransform) => {
    const controller = (0, controller_factory_1.makeController)();
    const customerDto = (0, customer_from_token_1.customerFromToken)(requestTransform);
    return await controller.generateCart((0, build_empty_cart_1.buildEmptyCart)(customerDto.email));
};
exports.generateCart = generateCart;
const addItem = async (requestTransform) => {
    const controller = (0, controller_factory_1.makeController)();
    const customerDto = (0, customer_from_token_1.customerFromToken)(requestTransform);
    return await controller.add(requestTransform.body, (0, build_query_param_1.buildAndQueryParam)(customerDto.email, true));
};
exports.addItem = addItem;
const getActiveCart = async (requestTransform) => {
    const controller = (0, controller_factory_1.makeController)();
    const customerDto = (0, customer_from_token_1.customerFromToken)(requestTransform);
    return await controller.read((0, build_query_param_1.buildAndQueryParam)(customerDto.email, true));
};
exports.getActiveCart = getActiveCart;
const removeItem = async (requestTransform) => {
    const controller = (0, controller_factory_1.makeController)();
    const customerDto = (0, customer_from_token_1.customerFromToken)(requestTransform);
    return await controller.removeItem(requestTransform.params, (0, build_query_param_1.buildAndQueryParam)(customerDto.email, true));
};
exports.removeItem = removeItem;
const resetCart = async (requestTransform) => {
    const controller = (0, controller_factory_1.makeController)();
    const customerDto = (0, customer_from_token_1.customerFromToken)(requestTransform);
    return await controller.resetCart(requestTransform.params, (0, build_query_param_1.buildAndQueryParam)(customerDto.email, true));
};
exports.resetCart = resetCart;
const saveShippingMethod = async (requestTransform) => {
    const controller = (0, controller_factory_1.makeController)();
    const customerDto = (0, customer_from_token_1.customerFromToken)(requestTransform);
    return await controller.saveShippingMethod(requestTransform.body, (0, build_query_param_1.buildAndQueryParam)(customerDto.email, true));
};
exports.saveShippingMethod = saveShippingMethod;
const savePaymentMethod = async (requestTransform) => {
    const controller = (0, controller_factory_1.makeController)();
    const customerDto = (0, customer_from_token_1.customerFromToken)(requestTransform);
    return await controller.savePaymentMethod(requestTransform.body, (0, build_query_param_1.buildAndQueryParam)(customerDto.email, true));
};
exports.savePaymentMethod = savePaymentMethod;
