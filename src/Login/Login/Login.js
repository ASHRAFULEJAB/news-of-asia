import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'

const Login = () => {
  const { signInEmailPassword } = useContext(AuthContext)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
   const from = location.state?.from?.pathname || '/'

  const handleSign = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password)
    signInEmailPassword(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
        form.reset()
        setError('')
        navigate(from,{replace:true})
      })
      .catch((e) => {
        console.log(e)
        setError(e.message)
      })
  }

  return (
    <Form onSubmit={handleSign}>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          name='email'
          placeholder='Enter email'
          required
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          name='password'
          placeholder='Password'
          required
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Login
      </Button>
      <Form.Text className='text-danger'>{error}</Form.Text>
    </Form>
  )
}

export default Login
