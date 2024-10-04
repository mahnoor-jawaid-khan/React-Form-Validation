import React, { useState } from 'react'
import './App.css'

function App() {
  let [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  let [error, setError] = useState({})
  const onChangeHandler = (e) => {
    setForm({
      ...form, [e.target.name]: e.target.value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()

    let validationError = {}

    if (!form.firstName.trim()) {
      validationError.firstName = 'First Name is required'
    }
    if (!form.lastName.trim()) {
      validationError.lastName = 'Last Name is required'
    }

    if (!form.email.trim()) {
      validationError.email = 'email is required'
    }
    else if (!form.email.includes == "@gmail.com") {
      validationError.email = 'invalid Email Format'
    }

    if(!form.password.trim()){
      validationError.password = 'Password is Required'
    }
    else if (form.password.length > 5) {
      validationError.password = 'Password length should be less than 5'
    }
    if (form.confirmPassword !== form.password) {
      validationError.confirmPassword = 'Unmatched'
    }
    setError(validationError)
    if (Object.keys(validationError).length === 0) {
      setError({})
      alert("Registration Completed")
      form.firstName = ''
    }
  }

  return (
    <div className='Form'>
      <h1>Signup Form</h1>
      <form action="" onSubmit={submitHandler}>
        <input type="text" name='firstName' placeholder='First Name' value={form.firstName} onChange={onChangeHandler} />
        {error.firstName && <p style={{ 'color': 'red', fontSize: '10px' }}>{error.firstName}</p>}
        <input type="text" name='lastName' placeholder='Last Name' value={form.lastName} onChange={onChangeHandler} />
        {error.lastName && <p style={{ 'color': 'red', fontSize: '10px' }}>{error.lastName}</p>}
        <input type="email" name='email' placeholder='Email' value={form.email} onChange={onChangeHandler} />
        {error.email && <p style={{ 'color': 'red', fontSize: '10px' }}>{error.email}</p>}
        <input type="password" name='password' placeholder='Password' value={form.password} onChange={onChangeHandler} />
        {error.password && <p style={{ 'color': 'red', fontSize: '10px' }}>{error.password}</p>}
        <input type="password" name='confirmPassword' placeholder='Confirm Password' value={form.confirmPassword} onChange={onChangeHandler} />
        {error.confirmPassword && <p style={{ 'color': 'red', fontSize: '10px' }}>{error.confirmPassword}</p>}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
