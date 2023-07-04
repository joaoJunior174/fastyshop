import { ServerError } from "./errors/server-error"
import { UnauthorizedError } from "./errors/unauthorized-error"

export type HttpResponse = {
    statusCode: number
    body: any
}

export type TokenResponse = {
  statusCode: number
  token: any
  type: any
  expiration: any
}

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})
  
export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error
})
  
export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError()
})
  
export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: error
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})

export const bearerToken = (generatedToken: string): TokenResponse => ({
  statusCode: 201,
  token: generatedToken,
  type: "Bearer",
  expiration: process.env.TOKEN_EXPIRATION_TIME
})