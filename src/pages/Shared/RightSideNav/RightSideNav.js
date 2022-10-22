import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaTwitch,
  FaLinkedin,
} from 'react-icons/fa'
import ListGroup from 'react-bootstrap/ListGroup'
import SlideShow from '../SlideShow/SlideShow'
import { GoogleAuthProvider } from 'firebase/auth'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider'

const RightSideNav = () => {
  const googleProvider = new GoogleAuthProvider()
  const { signInGoogle } = useContext(AuthContext)

  const handleGoogle = () => {
    signInGoogle(googleProvider)
      .then((result) => {
        const user = result.user
        alert('Login in succes', user)
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogle}
          variant='outline-primary'
          className='mb-3'
        >
          <FaGoogle /> Login With Google
        </Button>
        <Button variant='outline-dark'>
          <FaGithub />
          Login With Github
        </Button>
      </ButtonGroup>
      <div className='mt-5'>
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item className='p-3 mb-3'>
            <FaFacebook />
            FaceBook
          </ListGroup.Item>
          <ListGroup.Item className='p-3 mb-3'>
            <FaWhatsapp />
            WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className='p-3 mb-3'>
            <FaTwitter />
            Twiter
          </ListGroup.Item>
          <ListGroup.Item className='p-3 mb-3'>
            <FaTwitch />
            Twich
          </ListGroup.Item>
          <ListGroup.Item className='p-3 mb-3'>
            <FaLinkedin />
            LinkIn
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className='mt-3'>
        <SlideShow></SlideShow>
      </div>
    </div>
  )
}

export default RightSideNav
