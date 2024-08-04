import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import createConnection from './db/db.js';
import userRouter from './route/user.router.js';
const app = express();

dotenv.config({
    path:'./.env'
});

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json());

createConnection()

app.use("/api/users",userRouter)

app.listen(process.env.PORT,()=>{
    console.log(`server is running at port ${process.env.PORT}`);
    
})
