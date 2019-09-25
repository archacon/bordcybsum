import React from 'react'
import {
  Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  CardDeck
} from 'reactstrap'
import faker from 'faker'
import SpeakerCard from './speaker-card'

// replace fake data with graphql info
const speakerList = [
  {
    src: '',
    firstName: 'Shawn',
    middleInitial: '',
    lastName: 'Ollis',
    company: 'Prudential Financial',
    title: 'VP of Operations',
    blurb: ''
  },
  {
    src: '',
    firstName: 'Kira',
    middleInitial: '',
    lastName: 'Shuman',
    company: 'United States Department of Defense',
    title: 'Cybersecurity Division Chief',
    blurb: ''
  },
  {
    src: '',
    firstName: 'Ernesto',
    middleInitial: '',
    lastName: 'Arriola',
    company: 'City of El Paso',
    title: 'Information Security Asurance Manager',
    blurb: ''
  },
  {
    src: '',
    firstName: 'Jesus',
    middleInitial: 'Antonio',
    lastName: 'Flores',
    company: 'El Paso Independent School District',
    title: 'Director of Technology',
    blurb: ''
  }
]

export default () => (
  <Container id='speakers' className='col-md-8 col-xs-11 shadow-lg mx-auto'>
    <h1 id='enticetitle' className='text-center'>
      Speakers
    </h1>
    <CardDeck id='speakers' className='no-gutter'>
      {speakerList.map(speaker => {
        return (
          <Col lg={{ size: 6 }} sm={{ size: '12' }}>
            <SpeakerCard
              src={speaker.src}
              name={
                speaker.firstName +
                ' ' +
                speaker.middleInitial +
                ' ' +
                speaker.lastName
              }
              company={speaker.company}
              title={speaker.title}
              blurb={speaker.blurb}
            />
          </Col>
        )
      })}
    </CardDeck>
    <ListGroup id='speaker-schedule' style={{ maxWidth: '100%' }}>
      <ListGroupItem>
        <ListGroupItemHeading>Keynote Speaker: (10AM)</ListGroupItemHeading>
      </ListGroupItem>
      <ListGroupItem>
        • Shawn Ollis - VP of Operations Prudential Financial
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>
          Panel Speakers: (10:45A-12:00N)
        </ListGroupItemHeading>
      </ListGroupItem>
      <ListGroupItem>
        • Kira Shuman - Cybersecurity Division Chief United States Department of
        Defense
      </ListGroupItem>
      <ListGroupItem>
        • Ernesto Arriola - Information Security Assurance Manager City of El
        Paso
      </ListGroupItem>
      <ListGroupItem>
        • Jesus Antonio Flores - Director of Technology El Paso Independent
        School District
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>Current List of Sponsors:</ListGroupItemHeading>
      </ListGroupItem>
      <ListGroupItem>• El Paso Community College</ListGroupItem>
      <ListGroupItem>• Prudential Financial</ListGroupItem>
      <ListGroupItem>• LastLine.com</ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>
          After Summit Networking Event: (2PM-5PM)
        </ListGroupItemHeading>
      </ListGroupItem>
      <ListGroupItem>• The Shack Wings and Brews</ListGroupItem>
      <ListGroupItem>9120 Viscount Blvd., El Paso, TX 79925</ListGroupItem>
    </ListGroup>
    </Row>
  </Container>
)
