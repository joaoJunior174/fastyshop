import { HttpResponse } from "../../shared/http"
import { RequestTransform } from "../../shared/request"
import { makeController } from "./controller-factory"

export const addProduct = async (requestTransform: RequestTransform): Promise<HttpResponse> => {
   const controller =  makeController()
   return await controller.add(requestTransform.body)
}

export const getAllProduct = async (requestTransform: RequestTransform): Promise<HttpResponse> => {
    const controller = makeController()
    return await controller.read(requestTransform.params)
 }

export const getProductByName = async (requestTransform: RequestTransform): Promise<HttpResponse> => {
    const controller = makeController()
    return await controller.read(requestTransform.params)
 }

export const updateProductByName = async (requestTransform: RequestTransform): Promise<HttpResponse> => {
   const controller = makeController()
   return await controller.update(requestTransform.params, requestTransform.body)
}

export const deleteProductByName = async (requestTransform: RequestTransform): Promise<HttpResponse> => {
   const controller = makeController()
   return await controller.delete(requestTransform.params)
}