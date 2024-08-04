import mongoose from 'mongoose';
import { DB_NAME } from '../Constants.js';

const createConnection =async () =>{
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    try {
        console.log('MongoDB successfully connected');
    } catch (error) {
        console.log('MongoDB connection failed');
        
    } 
};

export default createConnection;