import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import { Row } from 'reactstrap'

import AboutUs from '../components/about-us'
import EventDetailsBar from '../components/event-details-bar'
import TitleBar from '../components/title-bar'
import SpeakersBar from '../components/speakers-bar'
import Header from '../components/header'
import SiteFooter from '../components/site-footer'
import ParallaxBar from '../components/parallax-bar'
import FormModal from '../components/form-modal'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import '../components/App.css'

import RegistrationForm from '../components/registration-form'

const IndexPage = () => (
  <Layout my={5}>
    <Header />
    <TitleBar />
    {/* <ParallaxBar index={0} /> */}
    <SpeakersBar />
    <EventDetailsBar />
    <AboutUs />
    <div style={{ marginBottom: '5em' }} />
  </Layout>
)

export default IndexPage
