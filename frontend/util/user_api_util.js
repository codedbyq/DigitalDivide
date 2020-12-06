// ajax calls to get users

export const getUser = userId => (
    $.ajax({
        method: 'get',
        url: `/api/users/${userId}`,
        data: { userId }
    })
);

export const getAllUsers = () => (
    $.ajax({
        method: 'get',
        url: '/api/users'
    })
);