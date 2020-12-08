import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

    const buttons = props.currentUser ? (
        <>
            <NavLink to=''>Sign In</NavLink>
            <NavLink to=''>Sign Up</NavLink>
        </>
    ) : (
        <button>Log Tut</button>
    )

    return (
        <div>
            
        </div>
    )
}



export default Navbar;
