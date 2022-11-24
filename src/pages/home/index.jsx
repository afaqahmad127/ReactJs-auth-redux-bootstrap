import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { MySpineer } from '../../components/shared';
import {
  errorMessage,
  loading,
  status,
  user,
} from '../../redux/features/app/app.slice';
import { userProfile } from '../../redux/features/auth/auth.slice';

const HomePage = () => {
  const dispatch = useDispatch();
  const appLoading = useSelector(loading);
  const appStatus = useSelector(status);
  const appUser = useSelector(user);
  const appErrorMessage = useSelector(errorMessage);

  React.useEffect(() => {
    if (!appUser?.name) {
      dispatch(userProfile());
    } else {
      console.log('called');
    }
  }, []);

  return (
    <>
      <Row>
        <Col md={4}>
          {appStatus !== 'error' ? (
            <Row>
              <Col>
                <h1 className='text-center'>Welcome Back</h1>
              </Col>
              <Col>
                {appLoading ? (
                  <MySpineer
                    color={'primary'}
                    text={'Loading'}
                  />
                ) : (
                  <h1 className='text-center text-primary'>{appUser?.name}</h1>
                )}
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <h1 className='text-center'>{appErrorMessage}</h1>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </>
  );
};
export default HomePage;
