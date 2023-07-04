import { Controller } from "../../shared/controller"
import { CustomerController } from "../controller"
import { makeService } from "./service-factory"

export const makeController = (): CustomerController => {
    return new CustomerController(makeService())
}