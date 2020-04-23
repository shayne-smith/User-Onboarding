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
            <h2>New User Form</h2>
            <div className='errors'>
                <h3>{errors.name}</h3>
                <h3>{errors.username}</h3>
                <h3>{errors.email}</h3>
                <h3>{errors.password}</h3>
            </div>

            {/* ///////////// TEXT INPUTS /////////////// */}
            <label>Name:&nbsp;&nbsp;&nbsp;
                <input 
                    value={values.name}
                    onChange={onInputChange}
                    name='name'
                    type='text' 
                />
            </label>
            <label>Username:&nbsp;&nbsp;&nbsp;
                <input 
                    value={values.username}
                    onChange={onInputChange}
                    name='username'
                    type='text' 
                />
            </label>
            <label>Email:&nbsp;&nbsp;&nbsp;
                <input 
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='text' 
                />
            </label>
            <label>Password:&nbsp;&nbsp;&nbsp;
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
            <button onClick={onSubmit} disabled={disabled}>SUBMIT</button>
        </form>
    )
}