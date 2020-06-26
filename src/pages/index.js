import React from "react"
import { Link } from "gatsby"
import About from "../components/about"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import logo from "../images/TMLogoCircle.png"
import logowhite from "../images/TMLogoCircleWhite.png"
class IndexPage extends React.Component {

  constructor() {
    super();
    this.state = {
      showTitle: true,
      showBio: "disappear",
    }
    // MDCRipple.attachTo(document.querySelector('.my-surface'));
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 200;
      console.log(!isTop);

        this.setState({
          showBio: isTop ? "disappear" : "appear"
        })

    });
  }


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
