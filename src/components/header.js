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
      const isTop = window.scrollY < 450;
      console.log(isTop);
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
          ><img className={this.state.logoClass} src={this.state.image}></img></a>
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
              <AnchorLink id="aboutNavLink" className="ripple" href="#aboutLocation">About </AnchorLink>
              <AnchorLink className="ripple" href="#hippl">Work </AnchorLink>
              <AnchorLink className="ripple" href="#hippl">Projects</AnchorLink>
              <AnchorLink className="ripple" href="#hippl">Resume</AnchorLink>
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
