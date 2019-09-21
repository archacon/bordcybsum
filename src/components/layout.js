/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

import EventDetailsBar from "./event-details-bar";
import TitleBar from "./title-bar";
import SpeakersBar from "./speakers-bar";
import Header from "./header";
import SiteFooter from "./site-footer";
import "./layout.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: "description", content: "Borderland Cyber Summit" },
          {
            name: "keywords",
            content: "cybersecurity, El Paso, Borderland, Summit"
          },
          { meta: "author", content: "Adrian Chacon" },
          {
            meta: "viewport",
            content: "width=device-width, initial-scale=1.0"
          }
        ]}
      >
        <html lang="en" />
        {/* General tags */}
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="image" content={data.site.siteMetadata.imageurl} />
        <meta property="og:url" content={data.site.siteMetadata.imageurl} />
        <meta property="og:title" content={data.site.siteMetadata.siteTitle} />
        <meta
          property="og:description"
          content={data.site.siteMetadata.description}
        />
        <meta property="og:image" content={data.site.siteMetadata.imageurl} />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.site.siteMetadata.title} />
        <meta
          name="twitter:description"
          content={data.site.siteMetadata.description}
        />
        <meta name="twitter:image" content={data.site.siteMetadata.imageurl} />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <TitleBar></TitleBar>
      <SpeakersBar></SpeakersBar>
      <EventDetailsBar></EventDetailsBar>
      <SiteFooter></SiteFooter>
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div> */}
    </>
  );
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired
// };

export default Layout;
