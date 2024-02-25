import express from 'express'
import Connection from './database/db.js';
import DefaultData from './default.js';
import dotenv from 'dotenv';

const app = express();
const PORT = 8000;
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);

app.listen(PORT, ()=> console.log(`server is running at PORT ${PORT}`));

DefaultData();
