import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { StaticQuery, graphql } from 'gatsby'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Img from 'gatsby-image'

class ParallaxBar extends Component {
  constructor (props) {
    super(props)
  }

  getIndex () {
    return this.props.index ? this.props.index : 0
  }

  render () {
    return (
      <StaticQuery
        query={graphql`
          query {
            allFile(
              filter: {
                extension: { regex: "/(jpeg|jpg|gif|png)/" }
                relativeDirectory: { eq: "parallax" }
              }
            ) {
              edges {
                node {
                  childImageSharp {
                    fluid(maxWidth: 240, maxHeight: 160) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <Container className='py-5'>
            <Parallax pages={1} scrolling={false}>
              <ParallaxLayer offset={0} speed={-0.3}>
                <Img
                  fluid={
                    data.allFile.edges[this.getIndex()].node.childImageSharp
                      .fluid
                  }
                />
              </ParallaxLayer>
              {/* <ParallaxLayer
                offset={0}
                speed={1}
                style={{ backgroundColor: '#000000' }}
              /> */}
            </Parallax>
          </Container>
        )}
      />
    )
  }
}

export default ParallaxBar
