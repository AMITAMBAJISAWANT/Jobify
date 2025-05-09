import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components/index'
function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sint rem accusamus adipisci laborum, reiciendis totam. Minus rem amet, nesciunt, ex earum quas aperiam fugit nulla inventore necessitatibus doloribus accusamus?
          </p>
          <Link to='/register' className='btn register-link'>Register</Link>
          <Link to='/login' className='btn'>Login/Demo User</Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img'></img>
      </div>
    </Wrapper>
  );
}



export default Landing
