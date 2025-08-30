import React from 'react'
import { FormRow} from'../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import {useOutletContext} from 'react-router-dom';
import {JOB_STATUS, JOB_TYPE} from '../../../utils/constants'
import {Form, useNavigation, redirect}from'react-router-dom'
import {toast} from 'react-toastify';
import customFetch from '../utils/customFetch';

function AddJob() {
  const {user} = useOutletContext();
  const navigate = useNavigation();
  const isSubmitting  = navigate.state === 'submitting';

  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>Add Job</h4>
        <div className='form-center'>
          <FormRow type= 'text' name= 'position' />
          <FormRow type= 'text' name = 'company'/>
          <FormRow type = 'text' labelText= 'jobLocation' name = 'jobLocation' defaultValue='India'/>

          <button type='submit' className='btn btn-block from-btn' disabled ={isSubmitting}>{
            isSubmitting?"isSubmitting...":"submit"}</button>
        </div>
      </Form>
    </Wrapper>
   
  )
}

export default AddJob
