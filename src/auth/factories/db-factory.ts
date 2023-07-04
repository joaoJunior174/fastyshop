import { makeAdapterDb } from "../../data/adapter-db"
import { Data } from "../../data/data"

export const makeDb = (): Data => {
    return makeAdapterDb()
}