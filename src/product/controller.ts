import { Data } from "../data/data"
import { Controller } from "../shared/controller"
import { HttpResponse, noContent, serverError } from "../shared/http"
import { Service } from "../shared/service"
import { ProductDto } from "./dto/product-dto"

export class ProductController implements Controller {

    private service?: Service

    constructor(service: Service) {
      this.service = service
    }

    async add (request: ProductDto): Promise<HttpResponse> {
      try {
        const resp: any = await this.service?.add(request)
        return resp
      } catch (error: any) {
        return serverError(error)
      }
    }
    async update (params: any, request: ProductDto): Promise<HttpResponse> {
      try {
        const resp: any = await this.service?.update(params, request)
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

    async read (params?: any): Promise<HttpResponse> {
      try {
        const resp: any = await this.service?.read(params)
        return resp
      } catch (error: any) {
        return serverError(error)
      }
    }    
}
