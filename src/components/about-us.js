import React from 'react'
import faker from 'faker'

const AboutUs = () => {
  return (
    <div id='aboutus'>
      <p>{faker.lorem.paragraphs()}</p>
    </div>
  )
}

export default AboutUs
