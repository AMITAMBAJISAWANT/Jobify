import React from 'react';
import { Link } from 'react-router-dom';
import {Logo, FormRow} from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';

function Register() {
  return (
    <Wrapper>
      <form className='form'>
        <Logo/>
        <h4>Register</h4>
        <FormRow type='text' name='name' defaultValue='Amit'/>
        <FormRow type='text' name='lastName' labelText='last name' defaultValue='Sawant'/>
        <FormRow type='text' name='location'/>
        <FormRow type='email' name='email'/>
        <FormRow type='password' name='password'/>
        <button type='submit' className='btn btn-block'>submit</button>
        <p>Already member?
          <Link to='/login' className='member-btn'>Login</Link>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register
