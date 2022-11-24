import { Navbar, Container } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

let MyFooter = () => {
  return (
    <>
      <Navbar
        bg='dark'
        variant='dark'
        fixed='bottom'
        // sticky='bottom'
      >
        <Container>
          <Navbar.Brand href='#home'>
            Created by{' '}
            <Link
              id='RouterNavLink'
              // style={None}
              to='#owner'
            >
              Afaq Ahmad
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default MyFooter;
