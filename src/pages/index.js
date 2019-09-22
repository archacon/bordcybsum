import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import AboutUs from '../components/about-us'
import EventDetailsBar from '../components/event-details-bar'
import TitleBar from '../components/title-bar'
import SpeakersBar from '../components/speakers-bar'
import Header from '../components/header'
import SiteFooter from '../components/site-footer'
import ParallaxBar from '../components/parallax-bar'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import '../components/App.css'

const IndexPage = () => (
  <Layout>
    <Header />
    <TitleBar />
    <ParallaxBar />
    <Parallax
      pages={1}
      scrolling={false}
      style={{ height: '6%', marginBottom: '6%' }}
    >
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{ backgroundColor: '#000000' }}
      />
    </Parallax>

    {/* <Parallax pages={1}>
      <ParallaxLayer
        offset={0.9}
        speed={1}
        style={{ backgroundColor: '#000000', height: '6%' }}
        className='col-md-12'
      />
      <ParallaxLayer
        offset={1.9}
        speed={1}
        style={{ backgroundColor: '#8F448E', height: '6%' }}
      />

      <ParallaxLayer offset={1} speed={1} style={{ pointerEvents: 'none' }} />

      <ParallaxLayer
        offset={1}
        speed={0.5}
        factor={1}
        style={{ opacity: 0.1, zIndex: '30' }}
      >
        <img
          src={url('cloud')}
          style={{ display: 'block', width: '20%', marginLeft: '55%' }}
        />
        <img
          src={url('cloud')}
          style={{ display: 'block', width: '30%', marginLeft: '15%' }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={0.1}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      />
    </Parallax> */}
    <SpeakersBar />
    <EventDetailsBar />
    <AboutUs />
    <div style={{ marginBottom: '5em' }} />
  </Layout>
)

export default IndexPage
