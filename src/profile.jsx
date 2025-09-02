import React from 'react'

function Profile({ name, email, role }) {
    return (
        <>
            <h1>User Profile Card</h1>
            <p>Name:{name}</p>
            <p>Email:{email}</p>
            <p>Role:{role}</p>
        </>
    )
}

export default Profile