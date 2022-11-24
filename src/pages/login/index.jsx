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
import { userLogin } from '../../redux/features/auth/auth.slice';

import { Link } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const appLoading = useSelector(loading);
  const appStatus = useSelector(status);
  const appErrorMessage = useSelector(errorMessage);
  const formRef = React.useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const email = formRef.current[0].value;
    const password = formRef.current[1].value;
    if (appStatus === 'error') {
      dispatch(refreshApiStates());
    }
    dispatch(userLogin({ email, password }));
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
            <Card.Header aria-busy={true}>Log In</Card.Header>
            <Card.Body>
              <Card.Title> Lets Login into the account! </Card.Title>
              <Form
                ref={formRef}
                onSubmit={onSubmit}
              >
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
                    Don't have an account?{' '}
                    <Link
                      id='SignUp'
                      to='/signup'
                    >
                      SignUp
                    </Link>
                  </Form.Text>
                </Form.Group>
                <div className='text-center'>
                  <Button
                    variant='primary'
                    type='submit'
                  >
                    Login
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
