import {body,param, validationResult} from 'express-validator';
import { BadRequestError, NotFoundError } from '../errors/customErrors.js';
import { JOB_STATUS, JOB_TYPE } from '../utils/constants.js';
import mongoose from 'mongoose';
import JOB from '../model/jobModel.js'
import User from '../model/UserModel.js';
import { StatusCodes } from 'http-status-codes';
const withValidationErrors = (validationValues)=>{
    return[
        validationValues,
        (req,res,next)=>{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                const errorMessage = errors.array().map((error)=>error.msg);
                if(errorMessage[0].startsWith('no jobs')){
                    throw new NotFoundError(errorMessage);
                }
                throw new BadRequestError(errorMessage);
            }
            next();
        }

    ]
}

export const validateJobInput = withValidationErrors([
  body("company").notEmpty().withMessage("company is required"),
  body("position").notEmpty().withMessage("position is required"),
  body("jobLocation").notEmpty().withMessage("job location is required"),
  body("jobStatus")
    .isIn(Object.values(JOB_STATUS))
    .withMessage("invalid status value"),
  body("jobType").isIn(Object.values(JOB_TYPE)).withMessage("invalid job type"),
]);

export const validateIdParam = withValidationErrors([
    param('id').custom(async(value)=>{
        const isValid  = mongoose.Types.ObjectId.isValid(value);
        if(!isValid)throw new BadRequestError('Invalid mongo DB ID');
        const job = await JOB.findById(value);
        if(!job)throw new NotFoundError(`no job with id : ${value}`);

    }),

]);

export const validateRegisterInput = withValidationErrors([
    body('name').notEmpty().withMessage('name is required'),
    body('email').notEmpty().withMessage('email is required')
    .isEmail()
    .withMessage('invalid formate')
    .custom( async(email)=>{
        const user = await User.findOne({email});
        if(user){
            throw new BadRequestError('email exist already');
        } 
    }),
    body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({min:8})
    .withMessage('password must be atleast 8 charcacters long'),
    body('location').notEmpty().withMessage('location is required'),
    body('lastName').notEmpty().withMessage('lastName is required'),

])

export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),
  body("password").notEmpty().withMessage("password is required"),
]);