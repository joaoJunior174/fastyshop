import { CustomerDto } from "../../customer/dto/customer-dto"
import { decodeToken } from "../../infra/jwt/generate-token"
import { customerFromToken } from "../../shared/customer-from-token"
import { HttpResponse } from "../../shared/http"
import { RequestTransform } from "../../shared/request"
import { buildEmptyCart } from "../helpers/build-empty-cart"
import { buildAndQueryParam } from "../helpers/build-query-param"
import { makeController } from "./controller-factory"

export const generateCart = async (requestTransform: RequestTransform): Promise<HttpResponse> => {
    const controller =  makeController()
    const customerDto: CustomerDto = customerFromToken(requestTransform)
    return await controller.generateCart(buildEmptyCart(customerDto.email))
 }

export const addItem = async (requestTransform: RequestTransform): Promise<HttpResponse> => {
   const controller =  makeController()
   const customerDto: CustomerDto = customerFromToken(requestTransform)
   return await controller.add(requestTransform.body, buildAndQueryParam(customerDto.email, true))
}

export const getActiveCart = async (requestTransform: RequestTransform): Promise<HttpResponse> => {
    const controller = makeController()
    const customerDto: CustomerDto = customerFromToken(requestTransform)
    return await controller.read(buildAndQueryParam(customerDto.email, true))
 }

export const removeItem = async (requestTransform: RequestTransform): Promise<HttpResponse> => {
   const controller = makeController()
   const customerDto: CustomerDto = customerFromToken(requestTransform)
   return await controller.removeItem(requestTransform.params, buildAndQueryParam(customerDto.email, true))
}

export const resetCart = async (requestTransform: RequestTransform): Promise<HttpResponse> => {
   const controller = makeController()
   const customerDto: CustomerDto = customerFromToken(requestTransform)
   return await controller.resetCart(requestTransform.params, buildAndQueryParam(customerDto.email, true))
}

export const saveShippingMethod = async (requestTransform: RequestTransform): Promise<HttpResponse> => {
   const controller = makeController()
   const customerDto: CustomerDto = customerFromToken(requestTransform)
   return await controller.saveShippingMethod(requestTransform.body, buildAndQueryParam(customerDto.email, true))
}

export const savePaymentMethod = async (requestTransform: RequestTransform): Promise<HttpResponse> => {
   const controller = makeController()
   const customerDto: CustomerDto = customerFromToken(requestTransform)
   return await controller.savePaymentMethod(requestTransform.body, buildAndQueryParam(customerDto.email, true))
}