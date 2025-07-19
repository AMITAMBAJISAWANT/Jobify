import 'express-async-errors'
import { privateDecrypt } from 'crypto';
import * as dotenv from 'dotenv';
import express from 'express';
import { copyFile } from 'fs';
const app=express();
import morgan from 'morgan';
import { nanoid } from 'nanoid';
import { body, validationResult } from 'express-validator';
//router
import jobRouter from './router/jobRouter.js'
//middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddelware.js';
//database
import mongoose from 'mongoose';
dotenv.config();

if(process.env.NODE_ENV === 'development'){
app.use(morgan('dev'));
}

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.post('/api/v1/test',
(req,res)=>{
    res.json({message:"First app",data:req.body});
});

app.use('/api/v1/jobs',jobRouter);

app.use('*',(req,res)=>{
    res.status(404).json({msg:'not found'});
})

app.use(errorHandlerMiddleware);


const port = process.env.PORT || 3000;

try{
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}...`);
    });

}
catch(error){
    console.log(error);
    process.exit(1);
}

