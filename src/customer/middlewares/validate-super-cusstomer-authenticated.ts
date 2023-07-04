import { decodeToken } from "../../infra/jwt/generate-token"
import { TokenExpired } from "../../shared/enums/token-expired-enum"
import { UserRole } from "../../shared/enums/user-role-enum"

export const checkSuperCustomerToken = (request: any): any => {
    try  {
        const decodedToken: any = decodeToken(request?.headers?.authorization?.replace('Bearer ', ''))
        if (decodedToken?.role != UserRole.ADMIN) {
            throw UserRole.MESSAGE_USER_DENIED
        }
        const currentTime = Math.floor(Date.now() / 1000)
        if (decodedToken.exp && decodedToken.exp < currentTime) {
            throw TokenExpired.TOKEN_EXPIRED_MESSAGE
        }
    } catch(error: any) {
        console.log(error)
        throw { stack: error }
    }

}