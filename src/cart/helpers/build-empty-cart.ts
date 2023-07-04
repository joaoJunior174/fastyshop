import {v4 as uuidv4} from 'uuid'
import { CartDto, ProductInCartDto } from '../dto/cart-dto'
import Cart from '../models/cart'

export const buildEmptyCart = (customerEmail: string): CartDto => {
    const cartDto: CartDto = new Cart(uuidv4(), customerEmail, [] as unknown as [ProductInCartDto], 0)
    cartDto.active = true
    return cartDto
}