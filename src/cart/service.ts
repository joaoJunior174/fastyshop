import { ok } from "../shared/http"
import { Data } from "../data/data"
import { HttpResponse } from "../shared/http" 
import { serverError } from "../shared/http"
import { CartDto, PaymentMethod, ProductInCartDto, ShippingMethodDto } from "./dto/cart-dto" 
import { formatResponseToDto } from "./helpers/format-response" 
import { buildAndQueryParam } from "./helpers/build-query-param"
import { ApiCall } from "../shared/network/api-call"
import { buildCreateCustomerBody } from "./helpers/build-create-customer"
import { CustomerDto } from "../customer/dto/customer-dto"
import { buildPagarmeHeader } from "../shared/network/build-pagarme-header"

export class CartService {

    private db: Data
    collectionName: string = "carts"
    customerCollection: string = "customers"
    gateway_uri_customers: any = process.env.PAGARME_URI_CUSTOMERS
    gateway_key: any = process.env.SECRET_KEY

    constructor(db: Data) {
        this.db = db
    }

    async generateCart (cartDto: CartDto): Promise<HttpResponse> {

        try {    
          const cart: [CartDto] = await this.db?.find(buildAndQueryParam(cartDto.customerEmail, cartDto.active) , this.collectionName)  
          if (!cart.length){
            await this.db?.add(cartDto, this.collectionName)
            const savedCart: [CartDto] = await this.db?.find(buildAndQueryParam(cartDto.customerEmail, cartDto.active) , this.collectionName)
            return ok(formatResponseToDto(savedCart[0]))
          }
          return ok(formatResponseToDto(cart[0]))  
            
        } catch (error: any) {
          return serverError(error)
        }
      }

      async add (productInCartDto: ProductInCartDto, query: any): Promise<HttpResponse> {
        try {
          const savedCart: [CartDto] = await this.db.find(query , this.collectionName)
          const index: any = savedCart[0].products?.findIndex((cart) => cart.code == productInCartDto.code)
          savedCart[0].total += productInCartDto.price
          if (index == -1) {
            savedCart[0].products?.push({ code: productInCartDto.code, qty: 1, price: productInCartDto.price })
            await this.db.update(savedCart[0], this.collectionName)
            return ok(formatResponseToDto(savedCart[0]))
          }

          savedCart[0].products[index].qty += 1
          await this.db.update(savedCart[0], this.collectionName)
          return ok(formatResponseToDto(savedCart[0]))
        } catch (error: any) {
          return serverError(error)
        }
      }
    async removeItem (params: any, query: any): Promise<HttpResponse> {
      try {
        const savedCart: [CartDto] = await this.db.find(query , this.collectionName)
        const index: any = savedCart[0].products?.findIndex((cart) => cart.code == params.code)

        if (index == -1) {
          return ok ({message: "This item do not exist in your cart"})
        }

        const price: number = savedCart[0].products[index].price
        savedCart[0].total -= price
        savedCart[0].products[index].qty -= 1
        
        if (savedCart[0].products[index].qty < 1) {
          savedCart[0].products.splice(index, 1)
        }

        await this.db.update(savedCart[0], this.collectionName)
        return ok(formatResponseToDto(savedCart[0]))

      } catch (error: any) {
        return serverError(error)
      }
    }

    async resetCart (params: any, query: any): Promise<HttpResponse> {
      try {
        const savedCart: [CartDto] = await this.db.find(query , this.collectionName)
        savedCart[0].total = 0
        savedCart[0].products = [] as unknown as [ProductInCartDto]


        await this.db.update(savedCart[0], this.collectionName)
        return ok(formatResponseToDto(savedCart[0]))

      } catch (error: any) {
        return serverError(error)
      }
    }

    async saveShippingMethod (shippingMethodDto: ShippingMethodDto, query: any): Promise<HttpResponse> {
      try {
        const savedCart: [CartDto] = await this.db.find(query , this.collectionName)
        
        const customerCart: [CustomerDto] = await this.db.find({email: savedCart[0].customerEmail}, this.customerCollection)

        const apiCall: ApiCall = new ApiCall()

        const response: any = await apiCall.post(buildCreateCustomerBody(customerCart[0]), this.gateway_uri_customers, buildPagarmeHeader(this.gateway_key))
        console.log(response)
        //await this.db.update(savedCart[0], this.collectionName)
        return ok(formatResponseToDto(response))

      } catch (error: any) {
        return serverError(error)
      }
    }

    async savePaymentMethod (paymentMethod: PaymentMethod, query: any): Promise<HttpResponse> {
      try {
        const savedCart: [CartDto] = await this.db.find(query , this.collectionName)
        
        if (!paymentMethod.method) {
          return ok ({message: "There is no payment method selected"})
        }

        savedCart[0].payment = paymentMethod

        await this.db.update(savedCart[0], this.collectionName)
        return ok(formatResponseToDto(savedCart[0]))

      } catch (error: any) {
        return serverError(error)
      }
    }

    async delete (params: any): Promise<HttpResponse> {
        return Promise.resolve(ok({}))
    }

    async read (query?: any): Promise<HttpResponse> {
      try {
        const savedCart: [CartDto] = await this.db?.find(query , this.collectionName)
        return ok(formatResponseToDto(savedCart[0]))
      } catch (error: any) {
        return serverError(error)
      }
    }    
}
