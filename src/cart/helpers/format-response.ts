import { CartDto } from "../dto/cart-dto"

export const formatResponseToDto = (cartDto: any): any => {
    const {_id, ...varnisheCart } =  cartDto
    return varnisheCart
}