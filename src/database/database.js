/*
database: img-db
username: mx5e4i93ko9a4dns62gg
host: us-east.connect.psdb.cloud
password: pscale_pw_h8dOZLlLpAVC5Jtcjf042iYIxeFjMXWV9d7GQKHnAhY

    "mongodb+srv://felixyahveh:<password>@cluster0.1mez5.mongodb.net/?retryWrites=true&w=majority"
    
import { createPool } from 'mysql2/promise';
    
export const sql = createPool('mysql://mx5e4i93ko9a4dns62gg:pscale_pw_h8dOZLlLpAVC5Jtcjf042iYIxeFjMXWV9d7GQKHnAhY@us-east.connect.psdb.cloud/img-db?ssl={"rejectUnauthorized":true}'
    );
*/

import { connect,  set } from 'mongoose'
set('strictQuery', true);
connect("mongodb+srv://felixyahveh:yahveh21072003@cluster0.1mez5.mongodb.net/photos?retryWrites=true&w=majority").then( res => {
    console.log('Connected succesfully to the database');
    console.log(res)
}).finally( res => {
    console.log("Failed to connect to the database");
    console.log(res);
});

module.exports = con