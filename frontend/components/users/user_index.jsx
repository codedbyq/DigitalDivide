import React, { useEffect } from 'react'

const UserIndex = ({ users, fetchAllUsers }) => {
    useEffect(() => { fetchAllUsers() }, []);

    return (
        <div>
            {users}
        </div>
    )
}

export default UserIndex;