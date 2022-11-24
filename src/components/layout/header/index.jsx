import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import React from 'react';
import logo from '../../../assets/logos/logo.png';
import { useNavigate } from 'react-router-dom';
import './style.scss';

let MyNavBar = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar
          bg='dark'
          variant='dark'
          fixed='top'
          key={expand}
          expand={expand}
          className='mb-3'
        >
          <Container fluid>
            <Navbar.Brand
              href='#'
              onClick={() => navigate('/')}
            >
              <img
                alt='logo url for home page. This logo will be used as the logo for the homepage.'
                src={logo}
                width='100'
                height='50'
                className='d-inline-block align-center'
              />
              <small className='app-title'>New React App</small>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
              bg={'dark'}
              variant='dark'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  href='#'
                  onClick={() => navigate('/')}
                >
                  <img
                    alt='logo url for home page. This logo will be used as the logo for the homepage.'
                    src={logo}
                    width='100'
                    height='50'
                    className='d-inline-block align-center'
                  />
                  React App
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {token && (
                  <Nav className='justify-content-end flex-grow-1 pe-3'>
                    <Nav.Link
                      href='#'
                      onClick={() => navigate('/profile')}
                    >
                      Profile
                    </Nav.Link>
                    <Nav.Link
                      href=''
                      onClick={() => {
                        sessionStorage.clear();
                        window.location.reload();
                      }}
                    >
                      Logout
                    </Nav.Link>
                  </Nav>
                )}
                {token || (
                  <Nav className='justify-content-end flex-grow-1 pe-3'>
                    <Nav.Link
                      href='#'
                      onClick={() => navigate('/')}
                    >
                      Login
                    </Nav.Link>
                  </Nav>
                )}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default MyNavBar;
