import jsonwebtoken from "jsonwebtoken"
import { CustomerDto } from "../../customer/dto/customer-dto"

export const generateToken = (customerDto: [ CustomerDto ]) => {
    const privateKey: any = process.env.PRIVATE_KEY
    const expirationTime: any = process.env.TOKEN_EXPIRATION_TIME
    return jsonwebtoken.sign({ taxvat: customerDto[0].taxvat, email: customerDto[0].email, role:customerDto[0].role }, privateKey, { expiresIn: expirationTime })
}

export const decodeToken = (token: string): any => {
    if (!token) {
        return
    }
    const privateKey: any = process.env.PRIVATE_KEY
    return jsonwebtoken.verify(token, privateKey)
}