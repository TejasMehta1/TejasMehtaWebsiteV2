import React from "react"
import { Link } from "gatsby"
import About from "../components/about"
import Image from "../components/image"
import SEO from "../components/seo"
import logo from "../images/TMLogoCircle.png"
import logowhite from "../images/TMLogoCircleWhite.png"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Skills from "./skills"

class Attributes extends React.Component {

  constructor() {
    super();
    this.state = {
      showTitle: true,
      showBio: false,
      showFrontEnd: false,
      showBackEnd: false,
      showDeploymentDB: false,
    }
    // MDCRipple.attachTo(document.querySelector('.my-surface'));
  }

  showItemBasedOnBottomDistance(id){
    return window.innerHeight + window.scrollY - document.getElementById(id).offsetTop > 50;
  }

  showItemBasedOnTopDistance(id){
    return document.getElementById(id).getBoundingClientRect().top > 0;
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      let showTitle;
      let showBio;
      let showFrontEnd;
      let showBackEnd;
      let showDeploymentDB;
      if (window.innerHeight < window.innerWidth) {
         showTitle = window.scrollY < 200;
         showBio = window.scrollY >= 200 && window.scrollY < 450;
         showFrontEnd = window.scrollY >= 450 && window.scrollY < 3000;
        showBackEnd = this.showItemBasedOnBottomDistance("backEndTitle") && this.showItemBasedOnTopDistance("backEndSkillLine");
        showDeploymentDB = this.showItemBasedOnBottomDistance("deploymentDBTitle") && this.showItemBasedOnTopDistance("deploymentDBSkillLine");
        // console.log(document.getElementById("backEndTitle").getBoundingClientRect().top);
      }
      else{
         showTitle = window.scrollY < 200;
         showBio = window.scrollY >= 200 && window.scrollY < 600;
        showFrontEnd = window.scrollY >= 450 && window.scrollY < 3000;
        showBackEnd = this.showItemBasedOnBottomDistance("backEndTitle") && this.showItemBasedOnTopDistance("backEndSkillLine");
        showDeploymentDB = this.showItemBasedOnBottomDistance("deploymentDBTitle") && this.showItemBasedOnTopDistance("deploymentDBSkillLine");
      }

      this.setState({
        showTitle: showTitle,
        showBio: showBio,
        showFrontEnd: showFrontEnd,
        showBackEnd: showBackEnd,
        showDeploymentDB: showDeploymentDB,
      })
      let aboutNavLink =  document.getElementById("aboutNavLink");
      showBio ? aboutNavLink.style.color = "lightblue" : aboutNavLink.style.color = "white";
      let skillsNavLink = document.getElementById("skillsNavLink");
      (showFrontEnd || showDeploymentDB) ? skillsNavLink.style.color = "lightblue" : skillsNavLink.style.color = "white";
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
        <Skills showFrontEnd={this.state.showFrontEnd ? "appear" : "disappear"} showBackEnd={this.state.showBackEnd ? "appear" : "disappear"} showDeploymentDB={this.state.showDeploymentDB ? "appear" : "disappear"}/>
      </React.Fragment>
    );

  }

}
export default Attributes;
