import { nanoid } from "nanoid";
import Job from '../model/jobModel.js'
import { NotFoundError } from "../errors/customErrors.js";


export const getAllJobs = async(req,res)=>{
    const jobs = await Job.find({});
    res.status(200).json({jobs});
};

export const createJob = async(req,res) => {
    const {company,position} = req.body;

    const job = await Job.create({company,position});
    res.status(201).json({job});

};

export const getJob = async(req,res)=>{
    const {id} = req.params;
    const job = await Job.findById(id);
    
    res.status(200).json({ job });
};

export const updateJob = async(req,res)=>{
    const { company, position } = req.body;
   
    const {id} =req.params;
    const updatedJob = await Job.findByIdAndUpdate(id,req.body,{new:true,});
    
    
    res.status(200).json({msg:'job modified',job:updateJob});
};

export const deleteJob = async (req, res)=>{
    const {id} = req.params;
    const removedJob = await Job.findByIdAndDelete(id);
    
    res.status(200)
       .json({msg:'job deleted',job:removedJob});
};









