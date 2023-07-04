import { ok } from "../shared/http"
import { Data } from "../data/data"
import { HttpResponse } from "../shared/http" 
import { noContent, serverError } from "../shared/http"
import { Service } from "../shared/service"
import { CustomerAddressDto, CustomerDto } from "./dto/customer-dto"
import { formatArrayResponseToDto, formatResponseToDto } from "./helpers/format-response-dto"
import { isEmptyObject } from "../shared/validation"
import { mergeCustomerAddressDto, mergeCustomerDto } from "./helpers/merge-customer-dto"
import { hashPassword } from "./helpers/hash-password"

export class CustomerService implements Service {

    private db?: Data
    collectionName: string = "customers"
    constructor(db: Data) {
        this.db = db
    }

    async add (customerDto: CustomerDto): Promise<HttpResponse> {
      try {
        const customerPasswordHashed = await hashPassword(customerDto)
        await this.db?.add(customerPasswordHashed, this.collectionName)
        return ok(formatResponseToDto(customerPasswordHashed))
      } catch (error: any) {
        return serverError(error)
      }
    }
    async update (params: any, customerDto: CustomerDto): Promise<HttpResponse> {
      try {
        const customer = mergeCustomerDto(customerDto, await this.db?.find(params, this.collectionName))
        await this.db?.update(customer, this.collectionName)
        const {role, password, ...varnishedDto } = customerDto
        return ok(varnishedDto)
      } catch (error: any) {
        return serverError(error)
      }
    }

    async updateAddress (query: any, customerAddressDto: CustomerAddressDto): Promise<HttpResponse> {
      try {
        if (!customerAddressDto?.id) {
          throw "Specify the address id in body"
        }

        const customerDto: any = await this.db?.find(query, this.collectionName)
        if (customerDto) {
          const addressIndex: any = customerDto[0].addresses.findIndex((address: { id: any }) => address.id === customerAddressDto.id);
          if (addressIndex <= -1) {
            throw "There is no address with this id"
          }
          customerDto[0].addresses[addressIndex] = mergeCustomerAddressDto(customerAddressDto, customerDto[0].addresses[addressIndex])
        }
        await this.db?.update(customerDto[0], this.collectionName)
        const {role, password, ...varnishedDto } = customerDto
        return ok(varnishedDto)
      } catch (error: any) {
        return serverError(error)
      }
    }

    async delete (params: any): Promise<HttpResponse> {
      try {
        await this.db?.delete(params, this.collectionName)
        return noContent()
      } catch (error: any) {
        return serverError(error)
      }
    }

    async deleteAddress (query: any, params: any): Promise<HttpResponse> {
      try {
        const customerDto: any = await this.db?.find(query, this.collectionName)
        if (customerDto) {
          const addressIndex: any = customerDto[0].addresses.findIndex((address: { id: any }) => address.id === params.id);
          if (addressIndex <= -1) {
            throw "There is no address with this id"
          }
          customerDto[0].addresses.splice(addressIndex, 1)
        } 
        await this.db?.update(customerDto[0], this.collectionName)
        const {role, password, ...varnishedDto } = customerDto[0]
        return ok(varnishedDto)
      } catch (error: any) {
        return serverError(error)
      }
    }

    async read (params?: any): Promise<HttpResponse> {
      try {
        if (isEmptyObject(params)) {
            return ok(formatArrayResponseToDto(await this.db?.findAll(this.collectionName)))
        } 
        return ok(formatArrayResponseToDto(await this.db?.find(params, this.collectionName)))
      } catch (error: any) {
        return serverError(error)
      }
    }    
}
