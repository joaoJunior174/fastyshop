export interface CustomerAddressDto {
    id: string
    street: string
    postcode: string
    neighbor: string
    city: string
    state: string
    country: string
    complement: string
    default: boolean
}

export interface CustomerDto {
    name: string
    taxvat: string
    tel: string
    birth: string
    email: string
    password: string
    role: number
    addresses: [CustomerAddressDto]
}

