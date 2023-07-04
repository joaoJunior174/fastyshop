import { CustomerAddressDto } from "../../customer/dto/customer-dto"
import { CartDto, Freight, PaymentMethod, ProductInCartDto } from "../dto/cart-dto"

export default class Cart implements CartDto {
    id?: string
    customerEmail?: string
    total: number
    products: [ProductInCartDto]
    address?: string
    active?: boolean
    freight?: Freight
    payment?: PaymentMethod
    
    constructor(id: string, customerEmail: string, products: [ProductInCartDto], total: number, address?: string, active?: boolean, freight?: Freight, payment?: PaymentMethod) {
        this.id = id
        this.customerEmail = customerEmail
        this.total = total
        this.products = products
        this.address = address
        this.active = active 
        this.freight = freight
        this.payment = payment
    }

}