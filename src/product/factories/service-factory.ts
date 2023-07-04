import { Service } from "../../shared/service"
import { ProductService } from "../service"
import { makeDb } from "./db-factory"

export const makeService = (): Service => {
    return new ProductService(makeDb())
}