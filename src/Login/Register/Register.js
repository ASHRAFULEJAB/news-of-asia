import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'

const Register = () => {
  const { signUpEmailPassword, updateUserProfile,verifyEmail } = useContext(AuthContext)
  const [error, setError] = useState('')
  const [accepted, setAccepted] = useState(false)

  const handleRegister = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const photoURL = form.photo.value
    const email = form.email.value
    const password = form.password.value
    // console.log(name, email, password)
    signUpEmailPassword(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
        setError('')
        form.reset()
        updateProfileName(name, photoURL)
        emailVeryfied()
        toast.success("Email Verification link send to ur email")
      })
      .catch((e) => {
        console.log(e)
        setError(e.message)
      })
  }
  const emailVeryfied = () => {
    verifyEmail()
      .then(() => { })
    .catch(e=>toast.error(e.message))
  }

  const updateProfileName = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    }

    updateUserProfile(profile)
      .then((result) => {
        const user = result.user
        alert('Profile updated', user)
      })
      .catch((e) => alert(e.message))
  }

  const handleAccepted = (e) => {
    setAccepted(e.target.checked)
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
      <Form.Group
        onClick={handleAccepted}
        className='mb-3'
        controlId='formBasicCheckbox'
      >
        <Form.Check
          type='checkbox'
          label={
            <>
              Accept the <Link to='/terms'>Terms & Conditions</Link>
            </>
          }
        />
      </Form.Group>

      <Button variant='primary' type='submit' disabled={!accepted}>
        Register
      </Button>
      <Form.Text className='text-danger'>{error}</Form.Text>
    </Form>
  )
}

export default Register
