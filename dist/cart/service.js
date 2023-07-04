"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const http_1 = require("../shared/http");
const http_2 = require("../shared/http");
const format_response_1 = require("./helpers/format-response");
const build_query_param_1 = require("./helpers/build-query-param");
const api_call_1 = require("../shared/network/api-call");
const build_create_customer_1 = require("./helpers/build-create-customer");
const build_pagarme_header_1 = require("../shared/network/build-pagarme-header");
class CartService {
    constructor(db) {
        this.collectionName = "carts";
        this.customerCollection = "customers";
        this.gateway_uri_customers = process.env.PAGARME_URI_CUSTOMERS;
        this.gateway_key = process.env.SECRET_KEY;
        this.db = db;
    }
    async generateCart(cartDto) {
        try {
            const cart = await this.db?.find((0, build_query_param_1.buildAndQueryParam)(cartDto.customerEmail, cartDto.active), this.collectionName);
            if (!cart.length) {
                await this.db?.add(cartDto, this.collectionName);
                const savedCart = await this.db?.find((0, build_query_param_1.buildAndQueryParam)(cartDto.customerEmail, cartDto.active), this.collectionName);
                return (0, http_1.ok)((0, format_response_1.formatResponseToDto)(savedCart[0]));
            }
            return (0, http_1.ok)((0, format_response_1.formatResponseToDto)(cart[0]));
        }
        catch (error) {
            return (0, http_2.serverError)(error);
        }
    }
    async add(productInCartDto, query) {
        try {
            const savedCart = await this.db.find(query, this.collectionName);
            const index = savedCart[0].products?.findIndex((cart) => cart.code == productInCartDto.code);
            savedCart[0].total += productInCartDto.price;
            if (index == -1) {
                savedCart[0].products?.push({ code: productInCartDto.code, qty: 1, price: productInCartDto.price });
                await this.db.update(savedCart[0], this.collectionName);
                return (0, http_1.ok)((0, format_response_1.formatResponseToDto)(savedCart[0]));
            }
            savedCart[0].products[index].qty += 1;
            await this.db.update(savedCart[0], this.collectionName);
            return (0, http_1.ok)((0, format_response_1.formatResponseToDto)(savedCart[0]));
        }
        catch (error) {
            return (0, http_2.serverError)(error);
        }
    }
    async removeItem(params, query) {
        try {
            const savedCart = await this.db.find(query, this.collectionName);
            const index = savedCart[0].products?.findIndex((cart) => cart.code == params.code);
            if (index == -1) {
                return (0, http_1.ok)({ message: "This item do not exist in your cart" });
            }
            const price = savedCart[0].products[index].price;
            savedCart[0].total -= price;
            savedCart[0].products[index].qty -= 1;
            if (savedCart[0].products[index].qty < 1) {
                savedCart[0].products.splice(index, 1);
            }
            await this.db.update(savedCart[0], this.collectionName);
            return (0, http_1.ok)((0, format_response_1.formatResponseToDto)(savedCart[0]));
        }
        catch (error) {
            return (0, http_2.serverError)(error);
        }
    }
    async resetCart(params, query) {
        try {
            const savedCart = await this.db.find(query, this.collectionName);
            savedCart[0].total = 0;
            savedCart[0].products = [];
            await this.db.update(savedCart[0], this.collectionName);
            return (0, http_1.ok)((0, format_response_1.formatResponseToDto)(savedCart[0]));
        }
        catch (error) {
            return (0, http_2.serverError)(error);
        }
    }
    async saveShippingMethod(shippingMethodDto, query) {
        try {
            const savedCart = await this.db.find(query, this.collectionName);
            const customerCart = await this.db.find({ email: savedCart[0].customerEmail }, this.customerCollection);
            const apiCall = new api_call_1.ApiCall();
            const response = await apiCall.post((0, build_create_customer_1.buildCreateCustomerBody)(customerCart[0]), this.gateway_uri_customers, (0, build_pagarme_header_1.buildPagarmeHeader)(this.gateway_key));
            console.log(response);
            //await this.db.update(savedCart[0], this.collectionName)
            return (0, http_1.ok)((0, format_response_1.formatResponseToDto)(response));
        }
        catch (error) {
            return (0, http_2.serverError)(error);
        }
    }
    async savePaymentMethod(paymentMethod, query) {
        try {
            const savedCart = await this.db.find(query, this.collectionName);
            if (!paymentMethod.method) {
                return (0, http_1.ok)({ message: "There is no payment method selected" });
            }
            savedCart[0].payment = paymentMethod;
            await this.db.update(savedCart[0], this.collectionName);
            return (0, http_1.ok)((0, format_response_1.formatResponseToDto)(savedCart[0]));
        }
        catch (error) {
            return (0, http_2.serverError)(error);
        }
    }
    async delete(params) {
        return Promise.resolve((0, http_1.ok)({}));
    }
    async read(query) {
        try {
            const savedCart = await this.db?.find(query, this.collectionName);
            return (0, http_1.ok)((0, format_response_1.formatResponseToDto)(savedCart[0]));
        }
        catch (error) {
            return (0, http_2.serverError)(error);
        }
    }
}
exports.CartService = CartService;
