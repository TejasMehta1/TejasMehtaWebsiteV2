/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import LeanHeader from "./leanheader"
import "./layout.css"
import "./tejas.css"
// import HeaderContainer from "./headerContainer"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery2 {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 960,
          padding: `0`,
        }}
      >
        <main>{children}</main>
        {/*<footer>*/}
        {/*  © {new Date().getFullYear()}, Built with*/}
        {/*  {` `}*/}
        {/*  <a href="https://www.gatsbyjs.org">Gatsby</a>*/}
        {/*</footer>*/}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
