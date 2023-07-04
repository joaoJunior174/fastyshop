import { makePostRouter, makeRouter, makeGetRouter, makeUpdateRouter } from "../config/express/router-factory";
import { checkCustomerToken } from "../customer/middlewares/validate-customer-authenticated";
import { addItem, generateCart, getActiveCart, resetCart, removeItem, saveShippingMethod } from "./factories/action-factory";

export const cartRouter = makeRouter()

makePostRouter(cartRouter, addItem , "/", checkCustomerToken)
makeGetRouter(cartRouter, getActiveCart, '/', checkCustomerToken)
makeUpdateRouter(cartRouter, saveShippingMethod, '/shipping-method', checkCustomerToken)
makeUpdateRouter(cartRouter, saveShippingMethod, '/payment-method', checkCustomerToken)
makeUpdateRouter(cartRouter, resetCart, '/reset', checkCustomerToken)
makeUpdateRouter(cartRouter, removeItem , "/:code", checkCustomerToken)
makePostRouter(cartRouter, generateCart , "/generate", checkCustomerToken)

