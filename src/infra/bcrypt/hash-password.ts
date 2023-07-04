import bcrypt from 'bcrypt'

export const generateHash = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10)
}