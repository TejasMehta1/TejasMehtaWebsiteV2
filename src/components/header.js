import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from 'react';
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
        isTop = window.scrollY < 800;
      }
      else{
        isTop = window.scrollY < 500;
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
      <header className={this.state.headerClass}
      >
        <div className="headerDiv"
        >
          <a
            href="#mainTitle"
          ><img className={this.state.logoClass + " transitionFade InvertColors"} src={this.state.image}></img></a>
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
            <div className="navLinks">
              <AnchorLink offset="250" id="aboutNavLink" className="ripple" href="#profilePic">About </AnchorLink>
              <AnchorLink offset="150" id="workNavLink" className="ripple" href="#workExperience">Work </AnchorLink>
              <AnchorLink className="ripple" href="#hippl">Projects</AnchorLink>
              <AnchorLink offset='150' id="skillsNavLink" className="ripple"  href="#skillsLocation">Skills</AnchorLink>
              <AnchorLink offset='150' id="resumeNavLink" className="ripple" href="#resumeTitle">Resume</AnchorLink>
              <AnchorLink className="ripple" href="#aboutLocation">Contact</AnchorLink>
            </div>
          </h1>
          {/*<span className="clearLine"></span>*/}
          <MobileNav/>
        </div>

      </header>
    )
  }
}

export default Header
