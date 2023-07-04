import { CustomerAddressDto } from "../../customer/dto/customer-dto"

export interface ProductInCartDto {
    code?: number
    qty: number
    price: number
}

export interface PaymentMethod {
    method?: number
    card_number?: string
    cvc?: string
    exp_date?: string
    holder_name?: string
}

export interface Freight {
    method_code?: string
    method_service?: string
    freight?: number
}

export interface ShippingMethodDto {
    freight: Freight
    address: string
}

export interface CartDto {
    id?: string
    customerEmail?: string
    total: number
    products: [ProductInCartDto]
    address?: string
    freight?: Freight
    payment?: PaymentMethod
    active?: boolean
}