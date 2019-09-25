import React from 'react'
import {
  Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  Card,
  CardTitle,
  CardText
} from 'reactstrap'
import faker from 'faker'
import SpeakerCard from './speaker-card'

// replace fake data with graphql info
const speakerList = [
  {
    src: faker.image.avatar(),
    firstName: faker.name.firstName(),
    middleInitial: '',
    lastName: faker.name.lastName(),
    company: faker.company.companyName(),
    title: faker.name.title(),
    blurb: faker.lorem.sentences()
  },
  {
    src: faker.image.avatar(),
    firstName: faker.name.firstName(),
    middleInitial: '',
    lastName: faker.name.lastName(),
    company: faker.company.companyName(),
    title: faker.name.title(),
    blurb: faker.lorem.sentences()
  },
  {
    src: faker.image.avatar(),
    firstName: faker.name.firstName(),
    middleInitial: '',
    lastName: faker.name.lastName(),
    company: faker.company.companyName(),
    title: faker.name.title(),
    blurb: faker.lorem.sentences()
  },
  {
    src: faker.image.avatar(),
    firstName: faker.name.firstName(),
    middleInitial: '',
    lastName: faker.name.lastName(),
    company: faker.company.companyName(),
    title: faker.name.title(),
    blurb: faker.lorem.sentences()
  },
  {
    src: faker.image.avatar(),
    firstName: faker.name.firstName(),
    middleInitial: '',
    lastName: faker.name.lastName(),
    company: faker.company.companyName(),
    title: faker.name.title(),
    blurb: faker.lorem.sentences()
  },
  {
    src: faker.image.avatar(),
    firstName: faker.name.firstName(),
    middleInitial: '',
    lastName: faker.name.lastName(),
    company: faker.company.companyName(),
    title: faker.name.title(),
    blurb: faker.lorem.sentences()
  }
]

export default () => (
  <Container>
    <h2 id='enticetitle' className='text-center'>
      Speakers
    </h2>
    <Row id='enticecontainer'>
      {speakerList.map(speaker => {
        return (
          <Col xs='4'>
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
    </Row>
    <Row>
    <ListGroup id='speaker-schedule'>
      <ListGroupItem>
        <ListGroupItemHeading>Keynote Speaker: (10AM)</ListGroupItemHeading>
      </ListGroupItem>
      <ListGroupItem>
        • Shawn OlListGroupItems - VP of Operations Prudential Financial
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
        <ListGroupItemHeading>
          Current ListGroupItemst of Sponsors:
        </ListGroupItemHeading>
      </ListGroupItem>
      <ListGroupItem>• El Paso Community College</ListGroupItem>
      <ListGroupItem>• Prudential Financial</ListGroupItem>
      <ListGroupItem>• LastListGroupItemne.com</ListGroupItem>
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
