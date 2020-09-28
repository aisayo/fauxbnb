import React from 'react';
import { NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <NavLink  exact activeStyle={{ color: 'blue'}} to='/'>
                Home
            </NavLink> |

            <NavLink exact activeStyle={{ color: 'blue'}} to='/postings'>
                Postings
            </NavLink> |      
        </>
    );
};

export default Navbar;