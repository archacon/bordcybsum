import React from 'react'
import { Container, Col, Row, Card, CardTitle, CardText } from 'reactstrap'
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
    title: faker.name.title()
  },
  {
    src: faker.image.avatar(),
    firstName: faker.name.firstName(),
    middleInitial: '',
    lastName: faker.name.lastName(),
    company: faker.company.companyName(),
    title: faker.name.title()
  },
  {
    src: faker.image.avatar(),
    firstName: faker.name.firstName(),
    middleInitial: '',
    lastName: faker.name.lastName(),
    company: faker.company.companyName(),
    title: faker.name.title()
  },
  {
    src: faker.image.avatar(),
    firstName: faker.name.firstName(),
    middleInitial: '',
    lastName: faker.name.lastName(),
    company: faker.company.companyName(),
    title: faker.name.title()
  },
  {
    src: faker.image.avatar(),
    firstName: faker.name.firstName(),
    middleInitial: '',
    lastName: faker.name.lastName(),
    company: faker.company.companyName(),
    title: faker.name.title()
  },
  {
    src: faker.image.avatar(),
    firstName: faker.name.firstName(),
    middleInitial: '',
    lastName: faker.name.lastName(),
    company: faker.company.companyName(),
    title: faker.name.title()
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
            />
          </Col>
        )
      })}
    </Row>
  </Container>
)
