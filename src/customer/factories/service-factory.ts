import { CustomerService } from "../service"
import { makeDb } from "./db-factory"

export const makeService = (): CustomerService => {
    return new CustomerService(makeDb())
}