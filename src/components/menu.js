import React from 'react';
import { StyledMenu } from './menu.styled';
import { bool } from "prop-types"
import AnchorLink from "react-anchor-link-smooth-scroll"



const Menu = ({ open }) => {
  // function getWinHeight(){
  //     return window.innerHeight;
  // }
  // let innerWindowHeight = 400;
  // innerWindowHeight = getWinHeight();
  // let bioOffset = (Math.pow(innerWindowHeight, 2))/(Math.pow(10, 3)) * 0.3 - 25
  return (
    <StyledMenu open={open}>
      {/*<a href="/">*/}
      {/*  <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>*/}
      {/*  About us*/}
      {/*</a>*/}
      <AnchorLink offset="250" id="aboutNavLink" className="ripple" href="#profilePic">About </AnchorLink>
      <AnchorLink offset="150" id="workNavLink" className="ripple" href="#workExperience">Work </AnchorLink>
      <AnchorLink className="ripple" href="#hippl">Projects</AnchorLink>
      <AnchorLink offset='150' id="skillsNavLink" className="ripple"  href="#skillsLocation">Skills</AnchorLink>
      <AnchorLink offset='150' id="resumeNavLink" className="ripple" href="#resumeTitle">Resume</AnchorLink>
      <AnchorLink offset='120' id="contactNavLink" className="ripple" href="#ContactUs">Contact</AnchorLink>

    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired
}
export default Menu;
