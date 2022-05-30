import React from 'react';
import { NavLink} from 'react-router-dom';
import {themeToggler} from '../../redux/reducers/themeReducer'
import { useSelector, useDispatch } from 'react-redux';
import {BsSun, BsFillMoonFill} from 'react-icons/bs'

import './navbar.css'

const Navbar = () => {
    const theme = useSelector((state) => state.Theme.theme)
    const dispatch = useDispatch()
    const handleSwitchOnChange = () => {
        dispatch(themeToggler())
    };
  return (
    <div className='navBar'>
        <div className="logo">
            {
                theme === false ? 
                <img src="./assets/images/d-news.png" alt="logo" /> : 
                <img src="./assets/images/l-news.png" alt="logo" /> 
            }
        </div>
        <div className="nav">
            <ul className="navLinks">
                <li className="navLink">
                    <NavLink to='/'>Home</NavLink>
                </li>
                {/* <li className="navLink">
                    <NavLink to='/latestNews'>Latest News</NavLink>
                </li>
                <li className="navLink">
                    <NavLink to='/revies'>Reviews</NavLink>
                </li> */}
            </ul>
            <div className="rightNav">
                <NavLink to='/login' className="navLink">Login</NavLink>
                <NavLink to='/register' className="navLink">Register</NavLink>
                <div
                    onClick={handleSwitchOnChange}
                    >
                    { theme === false ?
                        <BsSun /> :
                        <BsFillMoonFill />
                    }
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar