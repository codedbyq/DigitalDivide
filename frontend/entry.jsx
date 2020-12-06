import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllUsers, fetchUser } from './util/user_api_util';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Digital Divide</h1>, root)

    //! Testing Remove before pushing for production
    window.fetchUser = fetchUser;
    window.fetchAllUsers = fetchAllUsers;
});