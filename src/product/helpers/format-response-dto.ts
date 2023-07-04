import { ProductDto } from "../dto/product-dto"

export const formatArrayResponseToDto = (dataFromDb: Array<Object>): Array<ProductDto> => {
    const varnishedArray: Array<ProductDto> = []
    dataFromDb.forEach((value: any) => {
        const {_id, ...values } = value
        varnishedArray.push({ ...values })
    })
    return varnishedArray
}