import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

    const buttons = props.currentUser ? (
        <>
            <button>Log Tut</button>
        </>
    ) : (
        <>
            <NavLink to=''>Sign In</NavLink>
            <NavLink to=''>Sign Up</NavLink>
        </>
        )

    return (
        <div>
            {buttons}
        </div>
    )
}



export default Navbar;
