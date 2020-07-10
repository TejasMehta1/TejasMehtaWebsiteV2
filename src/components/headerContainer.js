// import PropTypes from "prop-types"
import React from "react"
import Header from "./header"
import uttower from "../images/uttower.jpg"
import { CSSTransitionGroup } from 'react-transition-group'
// import AnchorLink from "react-anchor-link-smooth-scroll"
import Attributes from "./attributes" // ES6
class HeaderContainer extends React.Component {

  constructor(props) {
    super(props);
    let root = document.documentElement;
    root.style.setProperty('--BackgroundUrl', `url(${uttower})`);
  }
  render() {
    return (
      <div className="headerPictureContainer">
        <Header siteTitle={this.props.siteTitle}/>
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
          <Attributes/>

        </CSSTransitionGroup>
      </div>
    )
  }

}


export default HeaderContainer

