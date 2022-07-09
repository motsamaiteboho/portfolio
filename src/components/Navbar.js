import React from 'react';
//import logo from '../images/logo'
import { FaBars } from 'react-icons/fa';
import { useSelector,useDispatch } from 'react-redux';
import { closeSubmenu, openSidebar, openSubmenu } from '../Redux';

const Navbar = () => {
  const isSidebarOpen = useSelector(state => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    dispatch(openSubmenu(page, {center,bottom}))
    //openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
    dispatch(closeSubmenu())
      //closeSubmenu();
    }
  };
  return (
    <nav className='nav position-sticky border-bottom border-danger border-3"' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
           <a className="navbar-brand" href="#">
              <img src='./images/logo.png' className='nav-logo' style={{height: '40px'}} alt='logo' />
          </a>
          <button className='btn toggle-btn' onClick={() => dispatch(openSidebar())} >
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              projects
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              about me
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
