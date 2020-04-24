import React from 'react';

function User({ details }) {
    if(!details){
        return <h3>Working fetching the user&apos;s details...</h3>
    }
    return (
        <div className='user'>
            <div className='userInfo'>
                <h2>{details.name}</h2>
                <p>Username: {details.username}</p>
                <p>Email: {details.email}</p>
                <p>Password: {details.password}</p>
            </div>
        </div>
    )
}

export default User