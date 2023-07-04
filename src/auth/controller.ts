import { LoginDto } from "./dto/login-dto"
import { AuthService } from "./service"


export class AuthController {

    private service?: AuthService

    constructor(service: AuthService) {
      this.service = service
    }

    async login (username: LoginDto): Promise<string> {
      try {
        const resp: any = await this.service?.login(username)
        return resp
      } catch (error: any) {
        return error
      }
    }  
}
