import { Data } from "./data";
import MongoDbConnection from "../config/mongodb/mongo-db-connection";

export const makeAdapterDb = (): Data => {
    return new MongoDbConnection()
}