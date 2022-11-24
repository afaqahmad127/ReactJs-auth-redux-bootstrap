import MyNavBar from '../header';
import MyFooter from '../footer';
import { Container } from 'react-bootstrap';

let MainLayout = (props) => {
  return (
    <>
      <div>
        <MyNavBar />
        <Container
          fluid
          style={{ marginTop: '5rem', marginBottom: '5rem' }}
        >
          {props.children}
        </Container>
        <MyFooter />
      </div>
    </>
  );
};

export default MainLayout;
