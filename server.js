import { privateDecrypt } from 'crypto';
import * as dotenv from 'dotenv';
import express from 'express';
import { copyFile } from 'fs';
const app=express();
import morgan from 'morgan';
import { nanoid } from 'nanoid';
import jobRouter from './router/jobRouter.js'
dotenv.config();

if(process.env.NODE_ENV === 'development'){
app.use(morgan('dev'));
}

// let jobs=[{id: nanoid(),company:'apple',position:'front-end'},
//           {id: nanoid(),company:'google',position:'back-end'}
// ];


app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.post('/',(req,res)=>{
    res.json({message:"First app",data:req.body});
});

app.use('/api/v1/jobs',jobRouter);

// app.get('/api/v1/jobs',(req,res)=>{
//     res.status(200).json({jobs});
// })

// //Create job
// app.post('/api/v1/job',(req,res)=>{
//     const{company,position} =req.body;
//     if(!company||!position){
//         return res
//           .status(400)
//           .json({ msg: "please provide company and position" });
//     }
//     const id = nonoid();
//     const job={id,company,position}; 
//     jobs.push(job)
//     res.status(200).json({job});
// });

// //Get Single job
// app.get('/api/v1/jobs/:id',(req,res)=>{
//     const {id} = req.params;
//     const job = jobs.find((job)=>job.id === id);
//     if(!job){
//         return res.status(404).json({msg:`no job with id ${id}`});
//     }
//     res.status(200).json({ job });
// })

// //Edit job
// app.patch('/api/v1/jobs/:id',(req,res)=>{
//     const {company ,position} =req.body;
//     if(!company||!position){
//         return res.status(400).json({message:'Please provide the company and postion'});
//     }
//     const {id} = req.params;
//     const job =jobs.find((job)=>{job.id===id});
//     if(!job){
//         return res.status(404).json({msg:`no job found with id ${id} `});
//     }

//     job.company=company;
//     job.position=position;
//     return res.status(200).json({message:'job modified',job});
// })

// //DELETE JOB

// app.delete('/api/v1/jobs/:id',(req,res)=>{
//     const { id } = req.params;
//     const job = jobs.find((job) => job.id === id);
//     if (!job) {
//       return res.status(404).json({ msg: `no job with id ${id}` });
//     }
//     const newJobs=jobs.filter((job)=>job.id !== id);
//     jobs = newJobs;
//     res.status(200).json({msg:'job deleted'});
// })

app.use('*',(req,res)=>{
    res.status(404).json({msg:'not found'});
})

app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).json({msg:'someting went wrong'});
    
});


const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}...`);
});