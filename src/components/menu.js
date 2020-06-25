import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from "prop-types"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      {/*<a href="/">*/}
      {/*  <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>*/}
      {/*  About us*/}
      {/*</a>*/}
      <AnchorLink className="ripple mobileNavLink" href="#hippl">Work </AnchorLink>
      <AnchorLink className="ripple mobileNavLink" href="#hippl">Projects</AnchorLink>
      <AnchorLink className="ripple mobileNavLink" href="#hippl">Resume</AnchorLink>
      <AnchorLink className="ripple mobileNavLink" href="#hippl">Contact</AnchorLink>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired
}
export default Menu;
