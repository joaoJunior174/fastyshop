import { makePostRouter, makeRouter, makeGetRouter, makeUpdateRouter, makeDeleteRouter } from "../config/express/router-factory";
import { checkSuperCustomerToken } from "../customer/middlewares/validate-super-cusstomer-authenticated";
import { addProduct, deleteProductByName, getAllProduct, getProductByName, updateProductByName } from "./factories/action-factory";

export const productRouter = makeRouter()

makePostRouter(productRouter, addProduct , "/", checkSuperCustomerToken)
makeGetRouter(productRouter, getAllProduct , "/all")
makeGetRouter(productRouter, getProductByName , "/:code")
makeUpdateRouter(productRouter, updateProductByName, '/:code', checkSuperCustomerToken)
makeDeleteRouter(productRouter, deleteProductByName, '/:code', checkSuperCustomerToken)
