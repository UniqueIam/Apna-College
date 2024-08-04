import express from 'express'

const app = express();
const port = 8000;

app.get('/',(req,res)=>{
    res.send('Hii');
})

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})