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
      <Card className='speaker-card shadow-lg'>
        {props.src ? (
          <CardImg top width='100%' src={props.src} alt='Card image cap' />
        ) : (
          ''
        )}
        <CardBody>
          <CardTitle>
            <h3>{props.name}</h3>
          </CardTitle>
          <CardSubtitle>
            <h6>{props.company}</h6>
            <b>{props.title}</b>
          </CardSubtitle>
          <CardText>{props.blurb}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}
