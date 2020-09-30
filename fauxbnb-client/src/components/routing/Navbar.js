import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        <>
                
            <NavLink style={{ textDecoration: "none", marginRight: 5}} exact activeStyle={{ color: 'blue'}} to='/'>
                Home 
            </NavLink> 
                        
            <NavLink style={{ textDecoration: "none", marginRight: 5}} exact activeStyle={{ color: 'blue'}} to='/posts'>
                Postings
            </NavLink>   

            <NavLink style={{ textDecoration: "none", marginRight: 5}} exact activeStyle={{ color: 'blue'}} to='/users/login'>
                Login
            </NavLink>   

            <NavLink style={{ textDecoration: "none", marginRight: 5}} exact activeStyle={{ color: 'blue'}} to='/users/signup'>
                Register
            </NavLink>  

        </>
    );
};

export default Navbar;

