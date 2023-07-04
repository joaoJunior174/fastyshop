import { decodeToken } from "../../infra/jwt/generate-token"
import { HttpResponse } from "../../shared/http"
import { RequestTransform } from "../../shared/request"
import { CustomerDto } from "../dto/customer-dto"
import { buildOrQueryParam } from "../helpers/build-query-param"
import { makeController } from "./controller-factory"

export const addCustomer = async (request: RequestTransform): Promise<HttpResponse> => {
   const controller =  makeController()
   const customerDto: CustomerDto = request.body
   customerDto.role = 1
   return await controller.add(customerDto)
}

export const addSuperCustomer = async (request: RequestTransform): Promise<HttpResponse> => {
   const controller =  makeController()
   const customerDto: CustomerDto = request.body
   customerDto.role = 2
   return await controller.add(customerDto)
}

export const getAllCustomer = async (request: RequestTransform): Promise<HttpResponse> => {
    const controller = makeController()
    return await controller.read({})
 }

export const getCustomerByUsername = async (request: RequestTransform): Promise<HttpResponse> => {
    const controller = makeController()
    return await controller.read(buildOrQueryParam(request.params))
}

export const getMe = async (request: RequestTransform): Promise<HttpResponse> => {
   const controller = makeController()
   const token: any  = request?.headers?.authorization
   const customer: any = decodeToken(token.replace('Bearer ', ''))
   return await controller.read(buildOrQueryParam({ username: customer.email ? customer.email : customer.taxvat }))
}

export const updateCustomerByUsername = async (request: RequestTransform): Promise<HttpResponse> => {
   const controller = makeController()
   const token: any  = request?.headers?.authorization
   const customerDto: CustomerDto = decodeToken(token.replace('Bearer ', ''))
   return await controller.update(buildOrQueryParam({ username: customerDto.email ? customerDto.email : customerDto.taxvat }), request.body)
}

export const createCustomerAddress = async (request: RequestTransform): Promise<HttpResponse> => {
   const controller = makeController()
   const token: any  = request?.headers?.authorization
   const customerDto: CustomerDto = decodeToken(token.replace('Bearer ', ''))
   return await controller.update(buildOrQueryParam({ username: customerDto.email ? customerDto.email : customerDto.taxvat }), request.body)
}

export const updateCustomerAddress = async (request: RequestTransform): Promise<HttpResponse> => {
   const controller = makeController()
   const token: any  = request?.headers?.authorization
   const customer: any = decodeToken(token.replace('Bearer ', ''))
   return await controller.updateAddress(buildOrQueryParam({ username: customer.email ? customer.email : customer.taxvat }), request.body)
}

export const deleteCustomerAddress = async (request: RequestTransform): Promise<HttpResponse> => {
   const controller = makeController()
   const token: any  = request?.headers?.authorization
   const customer: any = decodeToken(token.replace('Bearer ', ''))
   return await controller.deleteAddress(buildOrQueryParam({ username: customer.email ? customer.email : customer.taxvat }), request.params)
}

export const deleteCustomerByUsername = async (request: RequestTransform): Promise<HttpResponse> => {
   const controller = makeController()
   return await controller.delete(buildOrQueryParam(request.params))
}