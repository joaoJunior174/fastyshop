import { PostAxios } from "../../infra/axios/post";

export class ApiCall {
    async post(body: any, uri: string, header: any): Promise<any> {
        const postAction: PostAxios = new PostAxios()
        return await postAction.doRequest({
            uri: uri,
            body,
            header,
            callback: (resp: any) => {
                return resp
            },
            errorCallback: (error: any) => {
                console.log(error?.response?.data)
                return error
            }
        }) 
    }
}