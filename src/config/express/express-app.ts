import express, { Express } from 'express';
import bodyParser from 'body-parser';

const app: Express = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

export default app;