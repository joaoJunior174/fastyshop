export const buildAndQueryParam = (email: any, active?: boolean): any => {
    return { $and: [ { customerEmail:  email  }, { active: active } ] }
}