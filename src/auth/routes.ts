import { makePostRouter, makeRouter } from "../config/express/router-factory"
import { login } from "./factories/action-factory"

export const authRouter = makeRouter()

makePostRouter(authRouter, login , "/login")