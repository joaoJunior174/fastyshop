import { CustomerDto } from "../dto/customer-dto"

export const formatArrayResponseToDto = (dataFromDb: Array<Object>): Array<CustomerDto> => {
    const varnishedArray: Array<CustomerDto> = []
    dataFromDb.forEach((value: any) => {
        const { role, _id, password, ...values } = value
        varnishedArray.push({ ...values })
    })
    return varnishedArray
}

export const formatResponseToDto = (dataFromDb: any): CustomerDto => {
    const {role, _id, password, ...varnisheCustomer } =  dataFromDb
    return varnisheCustomer
}