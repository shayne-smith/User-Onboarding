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
            <h1>New User Form</h1>
            <div className='errors'>
                <h3>{errors.name}</h3>
                <h3>{errors.username}</h3>
                <h3>{errors.email}</h3>
                <h3>{errors.password}</h3>
            </div>

            {/* ///////////// TEXT INPUTS /////////////// */}
            <label>Name:&nbsp;&nbsp;&nbsp;
                <input
                    data-cy_name_input='cy_name_input'
                    value={values.name}
                    onChange={onInputChange}
                    name='name'
                    type='text' 
                />
            </label>
            <label>Username:&nbsp;&nbsp;&nbsp;
                <input
                    data-cy_username_input='cy_username_input'
                    value={values.username}
                    onChange={onInputChange}
                    name='username'
                    type='text' 
                />
            </label>
            <label>Email:&nbsp;&nbsp;&nbsp;
                <input
                    data-cy_email_input='cy_email_input'
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='text' 
                />
            </label>
            <label>Password:&nbsp;&nbsp;&nbsp;
                <input
                    data-cy_password_input='cy_password_input'
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='text' 
                />
            </label>
            <label><input
                    data-cy_terms_input='cy_terms_input'
                    checked={values.terms}
                    onChange={onCheckboxChange}
                    name='terms' 
                    type='checkbox' /> Terms of Service</label>
            <button onClick={onSubmit} disabled={disabled}>SUBMIT</button>
        </form>
    )
}