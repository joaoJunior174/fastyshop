import axios from "axios"
import { BaseRequest, Network } from "../../shared/network/template"

export class PostAxios implements BaseRequest {
    async doRequest(network: Network): Promise<any> {
        return axios.post(network.uri, network.body, network.header)
            .then(network.callback)
            .catch(network.errorCallback)      
    }
}