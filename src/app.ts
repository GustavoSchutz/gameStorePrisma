import express, { json } from "express";
import dotenv from 'dotenv';
import router from './routers/routes.js';
dotenv.config();

const app = express();
app.use(json());
app.use(router);


const port = +process.env.PORT;
app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
})