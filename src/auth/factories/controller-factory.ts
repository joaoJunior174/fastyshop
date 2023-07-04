import { AuthController } from "../controller"
import { makeService } from "./service-factory"

export const makeController = (): AuthController => {
    return new AuthController(makeService())
}