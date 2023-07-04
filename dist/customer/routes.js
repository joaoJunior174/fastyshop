"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRouter = void 0;
const router_factory_1 = require("../config/express/router-factory");
const action_factory_1 = require("./factories/action-factory");
const validate_customer_authenticated_1 = require("./middlewares/validate-customer-authenticated");
const validate_super_cusstomer_authenticated_1 = require("./middlewares/validate-super-cusstomer-authenticated");
exports.customerRouter = (0, router_factory_1.makeRouter)();
(0, router_factory_1.makePostRouter)(exports.customerRouter, action_factory_1.addCustomer, "/");
(0, router_factory_1.makePostRouter)(exports.customerRouter, action_factory_1.addSuperCustomer, "/admin");
(0, router_factory_1.makeGetRouter)(exports.customerRouter, action_factory_1.getMe, "/me", validate_customer_authenticated_1.checkCustomerToken);
(0, router_factory_1.makeUpdateRouter)(exports.customerRouter, action_factory_1.updateCustomerByUsername, '/me', validate_customer_authenticated_1.checkCustomerToken);
(0, router_factory_1.makePostRouter)(exports.customerRouter, action_factory_1.createCustomerAddress, '/me/address', validate_customer_authenticated_1.checkCustomerToken);
(0, router_factory_1.makeUpdateRouter)(exports.customerRouter, action_factory_1.updateCustomerAddress, '/me/address', validate_customer_authenticated_1.checkCustomerToken);
(0, router_factory_1.makeDeleteRouter)(exports.customerRouter, action_factory_1.deleteCustomerAddress, '/me/address/:id', validate_customer_authenticated_1.checkCustomerToken);
(0, router_factory_1.makeGetRouter)(exports.customerRouter, action_factory_1.getAllCustomer, "/all", validate_super_cusstomer_authenticated_1.checkSuperCustomerToken);
(0, router_factory_1.makeGetRouter)(exports.customerRouter, action_factory_1.getCustomerByUsername, "/:username", validate_super_cusstomer_authenticated_1.checkSuperCustomerToken);
(0, router_factory_1.makeDeleteRouter)(exports.customerRouter, action_factory_1.deleteCustomerByUsername, '/:username', validate_super_cusstomer_authenticated_1.checkSuperCustomerToken);
