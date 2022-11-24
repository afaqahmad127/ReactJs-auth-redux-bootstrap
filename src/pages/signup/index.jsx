import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import React from 'react';
import { MySpineer } from '../../components/shared';
import {
  loading,
  status,
  errorMessage,
  refreshApiStates,
} from '../../redux/features/app/app.slice';
import { useDispatch, useSelector } from 'react-redux';
import { userSignUp } from '../../redux/features/auth/auth.slice';

import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const appLoading = useSelector(loading);
  const appStatus = useSelector(status);
  const appErrorMessage = useSelector(errorMessage);
  const formRef = React.useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const name = formRef.current[0].value;
    const email = formRef.current[1].value;
    const password = formRef.current[2].value;
    if (appStatus === 'error') {
      dispatch(refreshApiStates());
    }
    dispatch(userSignUp({ email, password, name, navigate }));
  };
  return (
    <>
      <Row style={{ marginTop: '12rem' }}>
        <Col>
          <Card
            bg={'white'}
            key={'dark'}
            text={'dark'}
            style={{ width: '25rem' }}
            className='shadow m-auto'
          >
            <Card.Header aria-busy={true}>Sign Up</Card.Header>
            <Card.Body>
              <Card.Title> Lets make an account for you! </Card.Title>
              <Form
                ref={formRef}
                onSubmit={onSubmit}
              >
                <Form.Group
                  className='mb-3'
                  controlId='formBasicEmail'
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name='name'
                    type='text'
                    placeholder='Enter name'
                    required
                  />
                  <Form.Text className='text-muted'>
                    We'll use your name to show on your profile.
                  </Form.Text>
                </Form.Group>
                <Form.Group
                  className='mb-3'
                  controlId='formBasicEmail'
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    name='email'
                    type='email'
                    placeholder='Enter email'
                    required
                  />
                  <Form.Text className='text-muted'>
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group
                  className='mb-3'
                  controlId='formBasicPassword'
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    name='password'
                    placeholder='Enter password'
                    required
                  />
                </Form.Group>
                <Form.Group
                  className='mb-2'
                  controlId='formBasicPassword'
                >
                  <Form.Text className='text-muted'>
                    Already have an account?{' '}
                    <Link
                      id='Login'
                      to='/'
                    >
                      Login
                    </Link>
                  </Form.Text>
                </Form.Group>
                <div className='text-center'>
                  <Button
                    variant='primary'
                    type='submit'
                  >
                    Sign Up
                  </Button>
                </div>
                {appLoading && (
                  <div className='mt-2'>
                    <MySpineer
                      color={'green'}
                      text={'Please wait...'}
                    />
                  </div>
                )}
                {appStatus === 'error' && (
                  <div className='mt-2'>
                    <MySpineer
                      color={'red'}
                      text={appErrorMessage}
                    />
                  </div>
                )}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
