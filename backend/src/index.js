import express from 'express'
import dotenv from 'dotenv'
import createConnection from './db/db.js';

const app = express();

dotenv.config({
    path:'./.env'
});

createConnection()
.then(()=>{
    console.log("Connection successfully")
})
.catch(()=>{
    console.log("Connection failed")
})
app.get('/',(req,res)=>{
    res.send('Hii');
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running at port ${process.env.PORT}`);
})