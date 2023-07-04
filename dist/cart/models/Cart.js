"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cart {
    constructor(id, customerEmail, products, total, address, active, freight, payment) {
        this.id = id;
        this.customerEmail = customerEmail;
        this.total = total;
        this.products = products;
        this.address = address;
        this.active = active;
        this.freight = freight;
        this.payment = payment;
    }
}
exports.default = Cart;
