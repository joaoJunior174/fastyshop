import bcrypt from 'bcrypt'

export const isSamePassword = async (password: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(password, hash)
}