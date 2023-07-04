import { CustomerDto } from "../customer/dto/customer-dto"
import { decodeToken } from "../infra/jwt/generate-token"
import { RequestTransform } from "./request"

export const customerFromToken  = (requestTransform: RequestTransform): CustomerDto => {
    const token: any  = requestTransform?.headers?.authorization
    const customerDto: CustomerDto = decodeToken(token.replace('Bearer ', ''))
    return customerDto
}