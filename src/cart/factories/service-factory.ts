import { Service } from "../../shared/service"
import { CartService } from "../service"
import { makeDb } from "../../auth/factories/db-factory"

export const makeService = (): CartService => {
    return new CartService(makeDb())
}