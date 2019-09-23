import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'


//Original form by Adrian

/* class RegistrationForm extends Component {
  render () {
    return (
      <div className='col-12'>
        <Form id='registrationform' className='' action='' method='POST'>
          <FormGroup row>
            <Label
              for='firstName'
              sm={{ size: 2, offset: 2 }}
              textAlign='right'
            >
              Name
            </Label>
            <Col sm={3}>
              <Input
                type='text'
                name='firstName'
                id='firstName'
                placeholder='First'
              />
            </Col>
            <Col sm={3}>
              <Input
                type='text'
                name='lastName'
                id='lastName'
                placeholder='Last'
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for='exampleEmail' sm={{ size: 2, offset: 2 }}>
              Email
            </Label>
            <Col sm={6}>
              <Input
                type='email'
                name='email'
                id='exampleEmail'
                placeholder='example@domain.com'
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for='phoneNumber' sm={{ size: 2, offset: 2 }}>
              Phone Number
            </Label>
            <Col sm={6}>
              <Input type='tel' name='phoneNumber' id='phoneNumber' />
            </Col>
          </FormGroup>
          <FormGroup>
            <Button type='submit' color='primary' className='offset-sm-2'>
              Submit
            </Button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default RegistrationForm
*/

//Flip card form by Eddy
const cardContainer = RegistrationForm;

// React component for form inputs
class CardInput extends Component {
  render() {
    return(
      <fieldset>
        <input name={this.props.name} id={this.props.id} type={this.props.type || 'text'} placeholder={this.props.placeholder} required />
      </fieldset>
    )
  }
}
// React component for textarea
class CardTextarea extends Component {
  render() {
    return(
      <fieldset>
        <textarea name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} required ></textarea>
      </fieldset>
    )
  }
}

// React component for form button
class CardBtn extends Component {
  render() {
    return(
      <fieldset>
        <button className={this.props.className} type={this.props.type} value={this.props.value}>{this.props.value}</button>
      </fieldset>
    )
  }
}

// React component for the front side of the card
class CardFront extends Component {
  render() {
    return(
      <div className='card-side side-front'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xs-6'>

            </div>

            <div className='col-xs-6 side-front-content' id='card-front-image'>
              <h1>Borderland Cyber Summit 2019</h1>

              <h2>El Paso, TX</h2>

              <p>EPCC Admin Services Center</p>

              <p>Blah Blah Blah</p>

              <p>More Blah Blah Blah</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// React component for the back side of the card
class CardBack extends Component {
  render() {
    return(
      <div className='card-side side-back'>
        <div className='container-fluid'>
          <h1>Register here!</h1>

          <form formAction='' className='card-form'>
            <div className='row'>
              <div className='col-xs-6'>
                <CardInput name='contactFirstName' id='contactFirstName' type='text' placeholder='Your first name' />
              </div>

              <div className='col-xs-6'>
                <CardInput name='contactLastName' id='contactLastName' type='text' placeholder='Your last name' />
              </div>
            </div>

            <div className='row'>
              <div className='col-xs-6'>
                <CardInput name='contactEmail' id='contactEmail' type='email' placeholder='Your email address' />
              </div>

              <div className='col-xs-6'>
                <CardInput name='contactNumber' id='contactNumber' type='text' placeholder='Your phone number' />
              </div>
            </div>

            <CardTextarea name='contactMessage' id='contactMessage' placeholder='Your message' />

            <CardBtn className='btn btn-danger' type='submit' value='Send message' />
          </form>


        </div>
      </div>
    )
  }
}

// React component for the card (main component)
class RegistrationForm extends Component {
  render() {
    return(
      <div className='card-container'>
        <div className='card-body'>
          <CardBack />

          <CardFront />
        </div>
      </div>
    )
  }
}


export default RegistrationForm
