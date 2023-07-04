import { decodeToken } from "../../infra/jwt/generate-token"
import { TokenExpired } from "../../shared/enums/token-expired-enum"
import { UserRole } from "../../shared/enums/user-role-enum"
import { CustomerDto } from "../dto/customer-dto"
import { makeDb } from "../factories/db-factory"

export const checkCustomerToken = async (request: any): Promise<any> => {
    try  {
        const decodedToken: any = decodeToken(request?.headers?.authorization?.replace('Bearer ', ''))
        if (decodedToken?.role != UserRole.SIMPLE) {
            throw UserRole.MESSAGE_USER_DENIED
        }
        const currentTime = Math.floor(Date.now() / 1000)
        if (decodedToken.exp && decodedToken.exp < currentTime) {
            throw TokenExpired.TOKEN_EXPIRED_MESSAGE
        }
        const dataBaseInstance = makeDb()
        const customer: CustomerDto = await dataBaseInstance.find({ email: decodedToken?.email }, "customers")
        if (!customer) {
            throw TokenExpired.USER_NOT_FOUND_BY_TOKEN
        }
        
    } catch(error: any) {
        console.log(error)
        throw { stack: error }
    }
}