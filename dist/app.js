import express, { json } from "express";
import dotenv from 'dotenv';
import router from './routers/routes.js';
dotenv.config();
var app = express();
app.use(json());
app.use(router);
var port = +process.env.PORT;
app.listen(port, function () {
    console.log("Server is up and running on port: ".concat(port));
});
