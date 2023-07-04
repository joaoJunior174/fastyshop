import { authRouter } from '../../auth/routes';
import { cartRouter } from '../../cart/routes';
import { customerRouter } from '../../customer/routes';
import { productRouter } from '../../product/routes';
import express from 'express'

export const routes = express.Router();

routes.use('/products', productRouter)
routes.use('/customers', customerRouter)
routes.use('/auth', authRouter)
routes.use('/carts', cartRouter)