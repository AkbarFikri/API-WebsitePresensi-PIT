import express from 'express';
import router from './router/userRoute.js';
// require('dotenv').config()
// const mysql = require('mysql2')
// const connection = mysql.createConnection(process.env.DATABASE_URL)
// console.log('Connected to PlanetScale!')
// connection()

const app = express();
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("testing")
})