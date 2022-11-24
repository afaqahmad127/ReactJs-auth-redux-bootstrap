import { Row, Col, Card } from 'react-bootstrap';
const Profile = () => {
  const dataArray = [
    {
      mainColor: 'green',
      keyColor: 'blue',
      valueColor: 'red',
      children: [
        { key: 'Title', value: 'Shirt' },
        { key: 'Brand Name', value: 'Gucci' },
        { key: 'Price', value: '5,000' },
      ],
    },
    {
      mainColor: 'green',
      keyColor: 'blue',
      valueColor: 'red',
      children: [
        { key: 'Title', value: 'Shirt' },
        { key: 'Brand Name', value: 'Gucci' },
        { key: 'Price', value: '5,000' },
      ],
    },
  ];
  return (
    <>
      <Row>
        <Col>
          <Card
            bg={'white'}
            key={'dark'}
            text={'dark'}
            md={true}
            className='m-auto shadow'
          >
            <Card.Header>Data</Card.Header>
            <Card.Body>
              {dataArray.map((i) => (
                <Row className='m-auto'>
                  {i.children.map((j) => (
                    <>
                      <Col
                        sm={12}
                        md={4}
                      >
                        <Row
                          style={{
                            border: `1px solid ${i.mainColor}`,
                            borderRadius: '5px',
                          }}
                          className='m-1'
                        >
                          <Col
                            className='text-center'
                            style={{
                              border: `1px solid ${i.keyColor}`,
                              borderRadius: '5px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <strong>{j.key}</strong>
                          </Col>
                          <Col
                            className='text-center'
                            style={{
                              border: `1px solid ${i.valueColor}`,
                              borderRadius: '5px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <strong className='text-center'>{j.value}</strong>
                          </Col>
                        </Row>
                      </Col>
                    </>
                  ))}
                </Row>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Profile;
