import React from 'react'
import { Container, Col, Row, Card, CardTitle, CardText } from 'reactstrap'

export default props => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width='100%'
          src={require(this.props.name)}
          alt='Card image cap'
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  )
}
