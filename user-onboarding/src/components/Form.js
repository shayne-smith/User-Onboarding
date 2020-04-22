import React from 'react';

export default function Form(props) {
    // declare variables for Form properties
    const {
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit,
        disabled,
        errors,
    } = props

    return(
        <form className='form' onSubmit={onSubmit}>
            <h2>User Information</h2>
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
            </div>

            {/* ///////////// TEXT INPUTS /////////////// */}
            <label>Name:
                <input 
                    value={values.name}
                    onChange={onInputChange}
                    name='name'
                    type='text' 
                />
            </label>
            <label>Username:
                <input 
                    value={values.username}
                    onChange={onInputChange}
                    name='username'
                    type='text' 
                />
            </label>
            <label>Email:
                <input 
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='text' 
                />
            </label>
            <label>Password:
                <input 
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='text' 
                />
            </label>
            <label><input
                    checked={values.terms}
                    onChange={onCheckboxChange}
                    name='terms' 
                    type='checkbox' /> Terms of Service</label>
            <button onClick={onSubmit} disabled={disabled}>submit</button>
        </form>
    )
}