import { Data } from "../data/data"
import { Controller } from "../shared/controller"
import { HttpResponse, noContent, serverError } from "../shared/http"
import { Service } from "../shared/service"
import { CustomerAddressDto, CustomerDto } from "./dto/customer-dto"
import { CustomerService } from "./service"

export class CustomerController implements Controller {

    private service?: CustomerService

    constructor(service: CustomerService) {
      this.service = service
    }

    async add (request: CustomerDto): Promise<HttpResponse> {
      try {
        const resp: any = await this.service?.add(request)
        return resp
      } catch (error: any) {
        return serverError(error)
      }
    }
    async update (params: any, request: CustomerDto): Promise<HttpResponse> {
      try {
        const resp: any = await this.service?.update(params, request)
        return resp;
      } catch (error: any) {
        return serverError(error)
      }
    }

    async updateAddress (query: any, customerAddressDto: CustomerAddressDto): Promise<HttpResponse> {
      try {
        const resp: any = await this.service?.updateAddress(query, customerAddressDto)
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

    async deleteAddress (query: any, params: any): Promise<HttpResponse> {
      try {
        await this.service?.deleteAddress(query, params)
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
