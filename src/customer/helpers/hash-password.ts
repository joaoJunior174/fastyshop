import { generateHash } from "../../infra/bcrypt/hash-password"
import { CustomerDto } from "../dto/customer-dto"

export const hashPassword = async (customerDto: CustomerDto): Promise<CustomerDto> => {
    customerDto.password = await generateHash(customerDto.password)
    return Promise.resolve(customerDto)
}