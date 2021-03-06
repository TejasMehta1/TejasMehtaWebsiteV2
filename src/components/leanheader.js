import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from 'react';
import logo from "../images/TMLogoCircle.png"
import logowhite from "../images/TMLogoCircleWhite.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MobileNav from "./mobileNav"


class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      image: logo,
      isTop: true,
      headerClass: "mainHeader",
      logoClass: "colorLogo"
    }
    // MDCRipple.attachTo(document.querySelector('.my-surface'));
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      let isTop = false;
      if (window.innerHeight < window.innerWidth) {
        isTop = window.scrollY < 300;
      }
      else{
        isTop = window.scrollY < 200;
      }
      if (isTop !== this.state.isTop) {
        this.setState({
          isTop: isTop,
          image: isTop ? logo : logowhite,
          headerClass: isTop ? "mainHeader" : "mainHeaderColor",
          logoClass: isTop ? "colorLogo" : "whiteLogo"
        })
      }
    });
  }
  render() {

    return(
      <header style={{top: "0"}} className={this.state.headerClass}
      >
        <div className="headerDiv"
        >
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          ><img alt="TejasMehtaLogo" className={this.state.logoClass + " transitionFade InvertColors"} src={this.state.image}></img></Link>
          <h1 id="headerTitle" className='mainTitle'>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              TEJAS MEHTA
            </Link>
            {/*<div className="navLinks">*/}
            {/*  <AnchorLink offset="250" id="aboutNavLink" className="ripple" href="#profilePic">About </AnchorLink>*/}
            {/*  <AnchorLink offset="150" id="workNavLink" className="ripple" href="#workExperience">Work </AnchorLink>*/}
            {/*  <AnchorLink offset="150" id="projectsNavLink" className="ripple" href="#projects">Projects</AnchorLink>*/}
            {/*  <AnchorLink offset='150' id="skillsNavLink" className="ripple"  href="#skillsLocation">Skills</AnchorLink>*/}
            {/*  <AnchorLink offset='150' id="resumeNavLink" className="ripple" href="#resumeTitle">Resume</AnchorLink>*/}
            {/*  <AnchorLink offset='200' id="contactNavLink" className="ripple" href="#ContactUs">Contact</AnchorLink>*/}
            {/*</div>*/}
          </h1>
          {/*<span className="clearLine"></span>*/}
          {/*<MobileNav/>*/}
        </div>

      </header>
    )
  }
}

export default Header
