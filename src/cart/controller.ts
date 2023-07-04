import { CustomerDto } from "../customer/dto/customer-dto"
import { Data } from "../data/data"
import { Controller } from "../shared/controller"
import { HttpResponse, noContent, serverError } from "../shared/http"
import { Service } from "../shared/service"
import { CartDto, ProductInCartDto } from "./dto/cart-dto"
import { CartService } from "./service"

export class CartController {

    private service?: CartService

    constructor(service: CartService) {
      this.service = service
    }

    async generateCart (request: CartDto): Promise<HttpResponse> {
        try {
          const resp: any = await this.service?.generateCart(request)
          return resp
        } catch (error: any) {
          return serverError(error)
        }
      }

    async add (productInCartDtoo: ProductInCartDto, query: any): Promise<HttpResponse> {
      try {
        const resp: any = await this.service?.add(productInCartDtoo, query)
        return resp
      } catch (error: any) {
        return serverError(error)
      }
    }
    async removeItem (params: any, query: any): Promise<HttpResponse> {
      try {
        const resp: any = await this.service?.removeItem(params, query)
        return resp;
      } catch (error: any) {
        return serverError(error)
      }
    }

    async resetCart (params: any, query: any): Promise<HttpResponse> {
      try {
        const resp: any = await this.service?.resetCart(params, query)
        return resp;
      } catch (error: any) {
        return serverError(error)
      }
    }

    async saveShippingMethod (params: any, query: any): Promise<HttpResponse> {
      try {
        const resp: any = await this.service?.saveShippingMethod(params, query)
        return resp;
      } catch (error: any) {
        return serverError(error)
      }
    }

    async savePaymentMethod (params: any, query: any): Promise<HttpResponse> {
      try {
        const resp: any = await this.service?.savePaymentMethod(params, query)
        return resp;
      } catch (error: any) {
        return serverError(error)
      }
    }
    

    async delete (params: any): Promise<HttpResponse> {
      try {
        await this.service?.delete(params)
        return noContent()
      } catch (error: any) {
        return serverError(error)
      }
    }

    async read (query?: any): Promise<HttpResponse> {
      try {
        const resp: any = await this.service?.read(query)
        return resp
      } catch (error: any) {
        return serverError(error)
      }
    }    
}
