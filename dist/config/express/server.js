"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_app_1 = __importDefault(require("./express-app"));
const express_routing_1 = require("./express-routing");
require('dotenv').config();
const port = process.env.PORT;
express_app_1.default.use('/', express_routing_1.routes);
express_app_1.default.listen(port, () => {
    console.log(`[Server]: Express application running at https://localhost:${port}`);
});
