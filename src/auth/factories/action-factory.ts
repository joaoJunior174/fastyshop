import { RequestTransform } from "../../shared/request"
import { makeController } from "./controller-factory"

export const login = async (requestTransform: RequestTransform): Promise<string> => {
    const controller =  makeController()
    return await controller.login(requestTransform.body)
 }