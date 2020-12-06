// ajax calls to fetch users

export const fetchUser = userId => (
    $.ajax({
        method: 'get',
        url: `/api/users/${userId}`,
        data: { userId }
    })
);

export const fetchAllUsers = () => (
    $.ajax({
        method: 'get',
        url: '/api/users'
    })
);