import React from 'react'
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardText
} from 'reactstrap'

export default props => {
  return (
    <div>
      <Card>
        <CardImg top width='100%' src={props.src} alt='Card image cap' />
        <CardBody>
          <CardTitle>
            <h3>{props.name}</h3>
          </CardTitle>
          <CardSubtitle>
            <h5>{props.company}</h5>
            <b>{props.title}</b>
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
    </div>
  )
}
