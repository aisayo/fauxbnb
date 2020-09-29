import React from 'react';
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles';

const Navbar = () => {

    const classes = useStyles()

    return (
        <>
        <AppBar position="static" color="default" style={{ marginBottom: 10}}>
            <Toolbar >
                <h1 className={classes.root}>FauxBnB</h1>
                
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

            </Toolbar> 
        </AppBar>
        </>
    );
};

export default Navbar;

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      paddingTop: 10,
      marginRight: 10
    },
  });