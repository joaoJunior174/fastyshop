"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCreateCustomerBody = void 0;
const buildCreateCustomerBody = (customerDto) => {
    const default_address = customerDto.addresses.filter((address) => address.default)[0];
    return {
        name: customerDto.name,
        email: customerDto.email,
        code: customerDto.email,
        document: customerDto.taxvat.split(/[-.]/).join(''),
        document_type: "CPF",
        type: "individual",
        address: {
            country: default_address.country,
            state: default_address.state,
            city: default_address.city,
            zip_code: default_address.postcode,
            line_1: default_address.street + "," + default_address.neighbor
        }
    };
};
exports.buildCreateCustomerBody = buildCreateCustomerBody;
