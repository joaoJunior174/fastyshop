import { CartController } from "../controller"
import { makeService } from "./service-factory"

export const makeController = (): CartController => {
    return new CartController(makeService())
}