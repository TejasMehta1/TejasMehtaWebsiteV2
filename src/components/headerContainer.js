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
  }
  render() {
    return (
      <React.Fragment>
        <style dangerouslySetInnerHTML={{__html: `
      .headerPictureContainer:before { background-image: url(${uttower}) }
    `}} />
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
      </React.Fragment>
    )
  }

}


export default HeaderContainer

