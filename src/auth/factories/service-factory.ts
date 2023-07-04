import { AuthService } from "../service"
import { makeDb } from "./db-factory"

export const makeService = (): AuthService => {
    return new AuthService(makeDb())
}