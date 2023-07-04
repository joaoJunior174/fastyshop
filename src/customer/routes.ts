import { makePostRouter, makeRouter, makeGetRouter, makeUpdateRouter, makeDeleteRouter } from "../config/express/router-factory";
import { addCustomer, deleteCustomerByUsername, updateCustomerByUsername, getAllCustomer, getCustomerByUsername, addSuperCustomer, getMe, deleteCustomerAddress, createCustomerAddress, updateCustomerAddress } from "./factories/action-factory";
import { checkCustomerToken } from "./middlewares/validate-customer-authenticated";
import { checkSuperCustomerToken } from "./middlewares/validate-super-cusstomer-authenticated";

export const customerRouter = makeRouter()

makePostRouter(customerRouter, addCustomer , "/")
makePostRouter(customerRouter, addSuperCustomer , "/admin")
makeGetRouter(customerRouter, getMe , "/me", checkCustomerToken)
makeUpdateRouter(customerRouter, updateCustomerByUsername, '/me', checkCustomerToken)
makePostRouter(customerRouter, createCustomerAddress, '/me/address', checkCustomerToken)
makeUpdateRouter(customerRouter, updateCustomerAddress, '/me/address', checkCustomerToken)
makeDeleteRouter(customerRouter, deleteCustomerAddress, '/me/address/:id', checkCustomerToken)
makeGetRouter(customerRouter, getAllCustomer , "/all", checkSuperCustomerToken)
makeGetRouter(customerRouter, getCustomerByUsername , "/:username", checkSuperCustomerToken)
makeDeleteRouter(customerRouter, deleteCustomerByUsername, '/:username', checkSuperCustomerToken)
