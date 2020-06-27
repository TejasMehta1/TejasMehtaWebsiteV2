import React from 'react';
import { StyledMenu } from './menu.styled';
import { bool } from "prop-types"
import AnchorLink from "react-anchor-link-smooth-scroll"



const Menu = ({ open }) => {
  function getWinHeight(){
      return window.innerHeight;
  }
  let innerWindowHeight = 400;
  innerWindowHeight = getWinHeight();
  let bioOffset = (Math.pow(innerWindowHeight, 2))/(Math.pow(10, 3)) * 0.3 - 25
  return (
    <StyledMenu open={open}>
      {/*<a href="/">*/}
      {/*  <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>*/}
      {/*  About us*/}
      {/*</a>*/}
      <AnchorLink offset={bioOffset} className="ripple mobileNavLink" href="#profilePic">About</AnchorLink>
      <AnchorLink className="ripple mobileNavLink" href="#hippl">Work </AnchorLink>
      <AnchorLink className="ripple mobileNavLink" href="#hippl">Projects</AnchorLink>
      <AnchorLink offset='150' className="ripple mobileNavLink" href="#skillsLocation">Skills</AnchorLink>
      <AnchorLink className="ripple mobileNavLink" href="#hippl">Resume</AnchorLink>
      <AnchorLink className="ripple mobileNavLink" href="#hippl">Contact</AnchorLink>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired
}
export default Menu;
