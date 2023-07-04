"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomerByUsername = exports.deleteCustomerAddress = exports.updateCustomerAddress = exports.createCustomerAddress = exports.updateCustomerByUsername = exports.getMe = exports.getCustomerByUsername = exports.getAllCustomer = exports.addSuperCustomer = exports.addCustomer = void 0;
const generate_token_1 = require("../../infra/jwt/generate-token");
const build_query_param_1 = require("../helpers/build-query-param");
const controller_factory_1 = require("./controller-factory");
const addCustomer = async (request) => {
    const controller = (0, controller_factory_1.makeController)();
    const customerDto = request.body;
    customerDto.role = 1;
    return await controller.add(customerDto);
};
exports.addCustomer = addCustomer;
const addSuperCustomer = async (request) => {
    const controller = (0, controller_factory_1.makeController)();
    const customerDto = request.body;
    customerDto.role = 2;
    return await controller.add(customerDto);
};
exports.addSuperCustomer = addSuperCustomer;
const getAllCustomer = async (request) => {
    const controller = (0, controller_factory_1.makeController)();
    return await controller.read({});
};
exports.getAllCustomer = getAllCustomer;
const getCustomerByUsername = async (request) => {
    const controller = (0, controller_factory_1.makeController)();
    return await controller.read((0, build_query_param_1.buildOrQueryParam)(request.params));
};
exports.getCustomerByUsername = getCustomerByUsername;
const getMe = async (request) => {
    const controller = (0, controller_factory_1.makeController)();
    const token = request?.headers?.authorization;
    const customer = (0, generate_token_1.decodeToken)(token.replace('Bearer ', ''));
    return await controller.read((0, build_query_param_1.buildOrQueryParam)({ username: customer.email ? customer.email : customer.taxvat }));
};
exports.getMe = getMe;
const updateCustomerByUsername = async (request) => {
    const controller = (0, controller_factory_1.makeController)();
    const token = request?.headers?.authorization;
    const customerDto = (0, generate_token_1.decodeToken)(token.replace('Bearer ', ''));
    return await controller.update((0, build_query_param_1.buildOrQueryParam)({ username: customerDto.email ? customerDto.email : customerDto.taxvat }), request.body);
};
exports.updateCustomerByUsername = updateCustomerByUsername;
const createCustomerAddress = async (request) => {
    const controller = (0, controller_factory_1.makeController)();
    const token = request?.headers?.authorization;
    const customerDto = (0, generate_token_1.decodeToken)(token.replace('Bearer ', ''));
    return await controller.update((0, build_query_param_1.buildOrQueryParam)({ username: customerDto.email ? customerDto.email : customerDto.taxvat }), request.body);
};
exports.createCustomerAddress = createCustomerAddress;
const updateCustomerAddress = async (request) => {
    const controller = (0, controller_factory_1.makeController)();
    const token = request?.headers?.authorization;
    const customer = (0, generate_token_1.decodeToken)(token.replace('Bearer ', ''));
    return await controller.updateAddress((0, build_query_param_1.buildOrQueryParam)({ username: customer.email ? customer.email : customer.taxvat }), request.body);
};
exports.updateCustomerAddress = updateCustomerAddress;
const deleteCustomerAddress = async (request) => {
    const controller = (0, controller_factory_1.makeController)();
    const token = request?.headers?.authorization;
    const customer = (0, generate_token_1.decodeToken)(token.replace('Bearer ', ''));
    return await controller.deleteAddress((0, build_query_param_1.buildOrQueryParam)({ username: customer.email ? customer.email : customer.taxvat }), request.params);
};
exports.deleteCustomerAddress = deleteCustomerAddress;
const deleteCustomerByUsername = async (request) => {
    const controller = (0, controller_factory_1.makeController)();
    return await controller.delete((0, build_query_param_1.buildOrQueryParam)(request.params));
};
exports.deleteCustomerByUsername = deleteCustomerByUsername;
