export const buildOrQueryParam = (params: any): any => {
    return { $or: [ { taxvat:  params?.username  }, { email: params?.username } ] }
}