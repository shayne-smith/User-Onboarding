import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import './App.css';

//////////////// DEPENDENCIES //////////////////
import axios from 'axios'
import * as yup from 'yup'

/////////// URL USED FOR POST REQUESTS ///////////
const url = 'https://reqres.in/api/users';

const initialFormValues = {
  /////// TEXT INPUTS ////////
  name: '',
  username: '',
  email: '',
  password: '',
  //////// CHECKBOX //////////
  termsOfService: false,
}

///////// THE SHAPE OF THE VALIDATION ERRORS OBJECT ///////////
const initialFormErrors = {
  name: '',
  username: '',
  email: '',
  password: '',
}

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required('name is required'),
  username: yup
    .string()
    .min(3, 'username must have at least 3 characters')
    .required('username is required'),
  email: yup
    .string()
    .email('a VALID email is required')
    .min(6, 'email must have at least 6 characters'),
  password: yup
    .string()
    .min(6, 'password must have at least 6 characters')
    .required('a password is required'),
  termsOfService: yup
    .boolean(),
})

function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  ////////////////// STATE TO KEEP TRACK OF WHETHER SUBMIT BUTTON IS DISABLED //////////////////////
  const [formDisabled, setFormDisabled] = useState(false)

  ////////////////// STATE TO KEEP TRACK OF VALIDATION ERRORS //////////////////
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  ////////////////// IMPLEMENT CHANGE HANDLERS /////////////////////////
  const postUser = (user) => {
    axios.post(url, user)
      .then(res => {
        console.log(res)
        setUsers([...users, res.data])
        console.log(res.data)
        debugger
      })
      .catch(err => {
        debugger
      })
  }

  const onInputChange = evt => {

    const name = evt.target.name
    const value = evt.target.value

    yup
      .reach(formSchema, name)
      .validate(value)

      .then(valid => {
        // CLEAR ERROR
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch(err => {
        // SET THE ERROR IN THE RIGHT PLACE
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })
    
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onCheckboxChange = evt => {
    const isChecked = evt.target.checked

    setFormValues({
      ...formValues,
      'termsOfService': isChecked,
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newUser = {
      name: formValues.name,
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
      termsOfService: formValues.termsOfService,
    }

    postUser(newUser)
    setFormValues(initialFormValues)
  }

  ////////// RUN VALIDATION IF FORM VALUES CHANGE, /////////////////////
  //////////AND USE THEM TO ENABLE/DISABLE THE SUBMIT BUTTON ////////////
  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setFormDisabled(!valid);
    })
  }, [formValues])

  ////////////////// RENDER JSX AND REACT COMPONENTS ////////////////////
  return (
    <div className='container'>
      <h1>Shayne Smith</h1>
      <Form 
      values={formValues}
      onInputChange={onInputChange}
      onCheckboxChange={onCheckboxChange}
      onSubmit={onSubmit}
      disabled={formDisabled}
      errors={formErrors}
      />
    </div>
  );
}

export default App;
