import PropTypes from "prop-types"
import React from "react"
import Header from "./header"
import uttower from "../images/uttower.jpg"
import { CSSTransitionGroup } from 'react-transition-group'
import AnchorLink from "react-anchor-link-smooth-scroll"
import Attributes from "./attributes" // ES6

const HeaderContainer = ({ siteTitle }) => (
  <div style={{backgroundImage: `url(${uttower})`}} className="headerPictureContainer">
    <Header siteTitle={siteTitle}/>
    <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <Attributes></Attributes>

    </CSSTransitionGroup>
  </div>

)


export default HeaderContainer

