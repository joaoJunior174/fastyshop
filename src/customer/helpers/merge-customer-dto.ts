import {v4 as uuidv4} from 'uuid';

export const mergeCustomerDto = (fromRequestDto: any, fromDbDto: any): any => {
    fromDbDto[0].name = fromRequestDto?.name ?  fromRequestDto?.name : fromDbDto[0]?.name
    fromDbDto[0].taxvat = fromRequestDto?.taxvat ? fromRequestDto?.taxvat : fromDbDto[0]?.taxvat
    fromDbDto[0].email = fromRequestDto?.email ? fromRequestDto?.email : fromDbDto[0]?.email
    fromDbDto[0].tel = fromRequestDto?.tel ? fromRequestDto?.tel : fromDbDto[0]?.tel
    fromDbDto[0].birth = fromRequestDto?.birth ? fromRequestDto?.birth : fromDbDto[0]?.birth
    if (fromRequestDto?.addresses){
        if (!fromDbDto[0].addresses) {
            fromDbDto[0].addresses = []
        }
        fromRequestDto.addresses.id = uuidv4()
        fromDbDto[0].addresses.push(fromRequestDto?.addresses)
    }
    return fromDbDto[0]
}

export const mergeCustomerAddressDto = (fromRequestDto: any, fromDbDto: any): any => {
    fromDbDto.street = fromRequestDto?.street ?  fromRequestDto?.street : fromDbDto?.street
    fromDbDto.neighbor = fromRequestDto?.neighbor ? fromRequestDto?.neighbor : fromDbDto?.neighbor
    fromDbDto.postcode = fromRequestDto?.postcode ? fromRequestDto?.postcode : fromDbDto?.postcode
    fromDbDto.city = fromRequestDto?.city ? fromRequestDto?.city : fromDbDto?.city
    fromDbDto.state = fromRequestDto?.state ? fromRequestDto?.state : fromDbDto?.state
    fromDbDto.country = fromRequestDto?.country ? fromRequestDto?.country : fromDbDto?.country
    fromDbDto.complement = fromRequestDto?.complement ? fromRequestDto?.complement : fromDbDto?.complement
    fromDbDto.default = fromRequestDto?.default ? fromRequestDto?.default : fromDbDto?.default
    return fromDbDto
}
