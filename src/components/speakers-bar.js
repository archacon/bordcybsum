import React from 'react'
import { Container, Col, Row, Card, CardTitle, CardText } from 'reactstrap'

export default () => (
  <Container>
    <h2 id='enticetitle' className='text-center my-5'>
      Speakers
    </h2>
    <Row id='enticecontainer'>
      <Col sm='4' className='mb-3'>
        <Card
          body
          inverse
          style={{ backgroundColor: '#333', borderColor: '#333' }}
        >
          <CardTitle>Speaker 1</CardTitle>
          <CardText />
        </Card>
      </Col>
      <Col sm='4' className='mb-3'>
        <Card
          body
          inverse
          style={{ backgroundColor: '#333', borderColor: '#333' }}
        >
          <CardTitle>Speaker 2</CardTitle>
          <CardText />
        </Card>
      </Col>
      <Col sm='4' className='mb-3'>
        <Card
          body
          inverse
          style={{ backgroundColor: '#333', borderColor: '#333' }}
        >
          <CardTitle>Speaker 3</CardTitle>
          <CardText />
        </Card>
      </Col>
    </Row>
  </Container>
)
