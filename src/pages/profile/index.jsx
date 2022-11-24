import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  errorMessage,
  loading,
  status,
  user,
} from '../../redux/features/app/app.slice';
import { userProfile } from '../../redux/features/auth/auth.slice';

const Profile = () => {
  const dispatch = useDispatch();
  const appLoading = useSelector(loading);
  const appStatus = useSelector(status);
  const appUser = useSelector(user);
  const appErrorMessage = useSelector(errorMessage);

  React.useEffect(() => {
    if (!appUser?.name) {
      dispatch(userProfile());
    }
  }, []);
  return (
    <>
      <Row style={{ marginTop: '10rem' }}>
        <Col>
          <Card
            bg={'white'}
            key={'dark'}
            text={'dark'}
            style={{ width: '50rem' }}
            className='m-auto shadow'
          >
            <Card.Header>User Profile</Card.Header>
            <Card.Body>
              {appStatus !== 'error' ? (
                <Row className='m-auto'>
                  <>
                    <Col
                      sm={12}
                      md={{ span: 10 }}
                    >
                      <Row
                        className='m-1'
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'start',
                        }}
                      >
                        <Col className='text-center'>
                          <strong>Name</strong>
                        </Col>
                        <Col className='text-center'>
                          <strong className='text-center'>
                            {appUser?.name}
                          </strong>
                        </Col>
                      </Row>
                      <Row
                        className='m-1'
                        style={{
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'start',
                        }}
                      >
                        <Col className='text-center'>
                          <strong>Email</strong>
                        </Col>
                        <Col className='text-center'>
                          <strong className='text-center'>
                            {appUser?.email}
                          </strong>
                        </Col>
                      </Row>
                    </Col>
                  </>
                </Row>
              ) : (
                <Row>
                  <Col>{appErrorMessage}</Col>
                </Row>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Profile;
