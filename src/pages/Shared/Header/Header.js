import React, { useContext } from 'react'
import { Button, Image } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider'
import LeftSideNav from '../LeftSideNav/LeftSideNav'

const Header = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then((result) => alert('Logout succesfull'))
      .catch((error) => alert(error.message))
  }

  return (
    <Navbar
      collapseOnSelect
      className='mb-4'
      expand='lg'
      bg='dark'
      variant='dark'
    >
      <Container>
        <Navbar.Brand>
          <Link className='text-decoration-none' to='/'>
            News Of Asia
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            
          </Nav>
          <Nav>
            <Nav.Link>
              {user?.uid ? (
                <>
                  {user?.displayName}{' '}
                  <Button variant='light' onClick={handleLogOut}>Logout</Button>{' '}
                </>
              ) : (
                <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </>
              )}
            </Nav.Link>
            <Link to='/profile' >
              {user?.photoURL ? (
                <Image
                  style={{ height: '30px' }}
                  roundedCircle
                  src={user.photoURL}
                ></Image>
              ) : (
                <FaUser></FaUser>
              )}
            </Link>
          </Nav>
          <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
