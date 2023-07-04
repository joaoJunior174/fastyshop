import { Data } from "../data/data"
import { LoginDto } from "./dto/login-dto"
import { buildOrQueryParam } from "../customer/helpers/build-query-param"
import { isSamePassword } from "../infra/bcrypt/compare-password"
import { UnauthorizedError } from "../shared/errors/unauthorized-error"
import { generateToken } from "../infra/jwt/generate-token"
import { TokenResponse, bearerToken } from "../shared/http"

export class AuthService {

    private db?: Data
    collectionName: string = "customers"
    constructor(db: Data) {
        this.db = db
    }

    async login (username: LoginDto): Promise<TokenResponse> {
      try {
        const customerModel = await this.db?.find(buildOrQueryParam(username), this.collectionName)

        if (!(await isSamePassword(username.password, customerModel[0].password))) {
            throw new UnauthorizedError()
        }
        return bearerToken(generateToken(customerModel))
      } catch (error: any) {
        console.log(error)
        throw error
      }
    }
   
}
