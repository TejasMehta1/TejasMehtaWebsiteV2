import React from "react"
import { Link } from "gatsby"
import About from "../components/about"
import Image from "../components/image"
import SEO from "../components/seo"
import logo from "../images/TMLogoCircle.png"
import logowhite from "../images/TMLogoCircleWhite.png"
import AnchorLink from "react-anchor-link-smooth-scroll"

class Attributes extends React.Component {

  constructor() {
    super();
    this.state = {
      showTitle: true,
      showBio: false,
    }
    // MDCRipple.attachTo(document.querySelector('.my-surface'));
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const showTitle = window.scrollY < 200;
      const showBio = window.scrollY >= 200 && window.scrollY < 440

      this.setState({
        showTitle: showTitle,
        showBio: showBio,
      })
      let aboutNavLink =  document.getElementById("aboutNavLink");
      showBio ? aboutNavLink.style.color = "lightblue" : aboutNavLink.style.color = "white"
    });
  }


  render(){
    return (
      <React.Fragment>
        <h1  className={this.state.showTitle ? "bigTejasMehta appear" : "bigTejasMehta disappear"}> <span>HI!</span> <br /> <span id="iamtejasmehta">I'M TEJAS MEHTA</span>
          <br/>
          <h3 className="tripleDescription">Designer ~ Developer ~ Doer</h3>
          <AnchorLink id="titleAnchor" href="#aboutLocation" className=""><i
            className="material-icons downArrow">keyboard_arrow_down</i></AnchorLink>
        </h1>
        <About show={this.state.showBio ? "appear" : "disappear"}/>
      </React.Fragment>
    );

  }

}
export default Attributes;
