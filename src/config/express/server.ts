import  app from './express-app';
import { routes } from './express-routing';
require('dotenv').config()

const port = process.env.PORT

app.use('/', routes)
app.listen(port, ()=> {
    console.log(`[Server]: Express application running at https://localhost:${port}`);
});