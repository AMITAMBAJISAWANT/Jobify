import React from 'react';
import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft } from "react-icons/fa";
import Logo from './Logo';
import { useDashboardContext } from '../pages/DashboardLayout';
import NavLinks from './NavLinks';
import LogoutConatiner from './LogoutConatiner';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <FaAlignLeft/>
        </button>
        <div >
          <Logo/>
          <h4 className='logo-text'>dashboard</h4>
        </div>
        <div className='btn-container'>
          <ThemeToggle/>
          <LogoutConatiner/>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
