import React from "react"
// import { Link } from "gatsby"
// import About from "../components/about"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
// import logo from "../images/TMLogoCircle.png"
// import logowhite from "../images/TMLogoCircleWhite.png"
class IndexPage extends React.Component {

  render(){
    return (
  <Layout>
    <SEO title="Tejas Mehta" />
    {/*<About show={this.state.showBio}/>*/}
  </Layout>
)

}

}
export default IndexPage
