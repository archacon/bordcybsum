import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

class ParallaxBar extends Component {
  constructor (props) {
    super(props)
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
                    fluid(maxWidth: 600, maxHeight: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => <div />}
      />
    )
  }
}

export default ParallaxBar
