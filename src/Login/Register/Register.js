import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'

const Register = () => {
    const { signUpEmailPassword } = useContext(AuthContext)
    

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        signUpEmailPassword(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset()
            })
            .catch(e => {
            console.log(e)
        })
}

  return (
    <Form onSubmit={handleRegister}>
      <Form.Group className='mb-3' controlId='formBasicName'>
        <Form.Label>Your Name</Form.Label>
        <Form.Control type='text' name='name' placeholder='Enter your name' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicphotoURL'>
        <Form.Label>Your photoURL</Form.Label>
        <Form.Control type='text' name='photo' placeholder='Enter PhotoURL' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' name='email' placeholder='Enter email' required />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' name='password' placeholder='Password'required  />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Register
      </Button>
      <Form.Text className='text-muted'></Form.Text>
    </Form>
  )
}

export default Register
