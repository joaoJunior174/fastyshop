import { Controller } from "../../shared/controller"
import { ProductController } from "../controller"
import { makeService } from "./service-factory"

export const makeController = (): Controller => {
    return new ProductController(makeService())
}