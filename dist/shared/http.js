"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bearerToken = exports.noContent = exports.ok = exports.serverError = exports.unauthorized = exports.forbidden = exports.badRequest = void 0;
const unauthorized_error_1 = require("./errors/unauthorized-error");
const badRequest = (error) => ({
    statusCode: 400,
    body: error
});
exports.badRequest = badRequest;
const forbidden = (error) => ({
    statusCode: 403,
    body: error
});
exports.forbidden = forbidden;
const unauthorized = () => ({
    statusCode: 401,
    body: new unauthorized_error_1.UnauthorizedError()
});
exports.unauthorized = unauthorized;
const serverError = (error) => ({
    statusCode: 500,
    body: error
});
exports.serverError = serverError;
const ok = (data) => ({
    statusCode: 200,
    body: data
});
exports.ok = ok;
const noContent = () => ({
    statusCode: 204,
    body: null
});
exports.noContent = noContent;
const bearerToken = (generatedToken) => ({
    statusCode: 201,
    token: generatedToken,
    type: "Bearer",
    expiration: process.env.TOKEN_EXPIRATION_TIME
});
exports.bearerToken = bearerToken;
