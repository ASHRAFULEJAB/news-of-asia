import React, { useContext, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import toast from 'react-hot-toast'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider'

const Profile = () => {
  const { user } = useContext(AuthContext)
  const [photoURL, setPhotoURL] = useState(user.photoURL)
  const nameRef = useRef(user.displayName)

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Name updated',nameRef.current.value)
  }
  const handlePhoto = (e) => {
    setPhotoURL(e.target.value)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='formBasicName'>
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          ref={nameRef}
          defaultValue={user.displayName}
          type='text'
          name='name'
          placeholder='Enter your name'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicphotoURL'>
        <Form.Label>Your photoURL</Form.Label>
        <Form.Control
          onChange={handlePhoto}
          defaultValue={photoURL}
          type='text'
          name='photo'
          placeholder='Enter PhotoURL'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          name='email'
          readOnly
          defaultValue={user.email}
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
        Submit
      </Button>
      <Form.Text className='text-danger'></Form.Text>
    </Form>
  )
}

export default Profile
