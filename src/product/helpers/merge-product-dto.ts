import { ProductDto } from "../dto/product-dto"

export const mergeProductDto = (fromRequestDto: ProductDto, fromDbDto: any): any => {
    fromDbDto[0].name = fromRequestDto?.name ?  fromRequestDto?.name : fromDbDto[0]?.name
    fromDbDto[0].price = fromRequestDto?.price ? fromRequestDto.price : fromDbDto[0]?.price
    fromDbDto[0].quantity = fromRequestDto?.quantity ? fromRequestDto.quantity : fromDbDto[0]?.quantity
    fromDbDto[0].url = fromRequestDto?.url ? fromRequestDto.url : fromDbDto[0]?.url
    fromDbDto[0].description = fromRequestDto?.description ? fromRequestDto.description : fromDbDto[0]?.description
    fromDbDto[0].code = fromRequestDto?.code ? fromRequestDto.code : fromDbDto[0]?.code
    return fromDbDto[0]
}