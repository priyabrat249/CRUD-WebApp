import express from 'express';
import connection from './Database/db.js';
import dotenv from 'dotenv';
import Routes from './Routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
dotenv.config();

const PORT = 8000;
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use('/',Routes)
const userName = process.env.DB_username;
const password = process.env.DB_password;
// console.log(userName, password);
connection(userName, password);

app.listen(PORT, () => {
    console.log(`server Running successfully on port ${PORT}`);
})