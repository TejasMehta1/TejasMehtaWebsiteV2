import React from "react"
// import { Link } from "gatsby"
import About from "../components/about"
// import Image from "../components/image"
// import SEO from "../components/seo"
// import logo from "../images/TMLogoCircle.png"
// import logowhite from "../images/TMLogoCircleWhite.png"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Skills from "./skills"
import Work from "./work"
import Resume from "./resume"
import Contact from "./contact"

class Attributes extends React.Component {

  constructor() {
    super();
    this.state = {
      showTitle: true,
      showBio: false,
      showFrontEnd: false,
      showBackEnd: false,
      showDeploymentDB: false,
      showWork: false,
      showZimperium: false,
      showResume: false,
      showContact: false
    }
    // MDCRipple.attachTo(document.querySelector('.my-surface'));
  }

  showItemBasedOnBottomDistance(id, offset){
    // if (id === "zimperiumDivTransition"){
    //   console.log(window.innerHeight + window.scrollY - document.getElementById(id).offsetTop);
    // }
    return window.innerHeight + window.scrollY - document.getElementById(id).offsetTop > offset;
  }

  showItemBasedOnTopDistance(id, offset){
    // if(id === "profilePic") {
    //   console.log(id + " : " + document.getElementById(id).getBoundingClientRect().top)
    // }
    return document.getElementById(id).getBoundingClientRect().top > offset;
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      let showTitle;
      let showBio;
      let showFrontEnd;
      let showBackEnd;
      let showDeploymentDB;
      let showWork;
      let showHD;
      let showUNT;
      let showZimperium;
      let showResume;
      let showContact;
      // if (window.innerHeight < window.innerWidth) {
         showTitle = this.showItemBasedOnTopDistance("hiImTejasMehta",20);
         showBio = this.showItemBasedOnBottomDistance("profilePic", window.innerHeight*.5) && this.showItemBasedOnTopDistance("profilePic",50);
      showWork = this.showItemBasedOnBottomDistance("workExperience", 450) && this.showItemBasedOnTopDistance("skillsLocation", 20);
      showHD = this.showItemBasedOnBottomDistance("workExperience", 450) && this.showItemBasedOnTopDistance("skillsLocation", 20);
      showZimperium = this.showItemBasedOnBottomDistance("zimperiumDivTransition", 150) && this.showItemBasedOnTopDistance("skillsLocation", 20);
      showUNT = this.showItemBasedOnBottomDistance("UNTDivTransition", 50) && this.showItemBasedOnTopDistance("skillsLocation", 20);
         showFrontEnd = this.showItemBasedOnBottomDistance("frontEndTitle", 20) && this.showItemBasedOnTopDistance("frontEndSkillLine", 0);
          showBackEnd = this.showItemBasedOnBottomDistance("backEndTitle", 50) && this.showItemBasedOnTopDistance("backEndSkillLine", 0);
        showDeploymentDB = this.showItemBasedOnBottomDistance("deploymentDBTitle", 50) && this.showItemBasedOnTopDistance("deploymentDBSkillLine", 0);
        showResume = this.showItemBasedOnBottomDistance("resumeTitle" , 350) && this.showItemBasedOnTopDistance("TejasMehtaResume", -800);
        showContact = this.showItemBasedOnBottomDistance("ContactUs" , 350)
        // console.log(document.getElementById("backEndTitle").getBoundingClientRect().top);
      // }
      // else{
      //   showTitle = this.showItemBasedOnTopDistance("hiImTejasMehta",20);
      //   showBio = this.showItemBasedOnBottomDistance("profilePic", window.innerHeight*.5) && this.showItemBasedOnTopDistance("profilePic",50);
      //   showWork = this.showItemBasedOnBottomDistance("workExperience", 275) && this.showItemBasedOnTopDistance("skillsLocation", 0);
      //   showFrontEnd = window.scrollY >= 450 && window.scrollY < 3000;
      //   showBackEnd = this.showItemBasedOnBottomDistance("backEndTitle", 50) && this.showItemBasedOnTopDistance("backEndSkillLine", 0);
      //   showDeploymentDB = this.showItemBasedOnBottomDistance("deploymentDBTitle", 50) && this.showItemBasedOnTopDistance("deploymentDBSkillLine", 0);
      // }

      this.setState({
        showTitle: showTitle,
        showBio: showBio,
        showFrontEnd: showFrontEnd,
        showBackEnd: showBackEnd,
        showDeploymentDB: showDeploymentDB,
        showWork: showWork,
        showHD: showHD,
        showUNT: showUNT,
        showZimperium: showZimperium,
        showResume: showResume,
        showContact: showContact
      })
      let aboutNavLink =  document.getElementById("aboutNavLink");
      showBio ? aboutNavLink.style.color = "lightblue" : aboutNavLink.style.color = "white";
      let workNavLink = document.getElementById("workNavLink")
      showWork && !(showFrontEnd || showDeploymentDB) ? workNavLink.style.color = "lightblue" : workNavLink.style.color = "white";
      let skillsNavLink = document.getElementById("skillsNavLink");
      (showFrontEnd || showDeploymentDB) && !showResume ? skillsNavLink.style.color = "lightblue" : skillsNavLink.style.color = "white";
      let resumeNavLink = document.getElementById("resumeNavLink");
      (showResume) && !(showContact) ? resumeNavLink.style.color = "lightblue" : resumeNavLink.style.color = "white";
      let contactNavLink = document.getElementById("contactNavLink");
      (showContact) ? contactNavLink.style.color = "lightblue" : contactNavLink.style.color = "white";
    });
  }


  render(){
    return (
      <React.Fragment>
        <h1 className={this.state.showTitle ? "bigTejasMehta appear" : "bigTejasMehta disappear"}> <span id={"hiImTejasMehta"}>HI!</span> <br /> <span id="iamtejasmehta">I'M TEJAS MEHTA</span>
          <br/>
          <h3 className="tripleDescription">Designer ~ Developer ~ Doer</h3>
          <AnchorLink id="titleAnchor" href="#aboutLocation" className=""><i
            className="material-icons downArrow">keyboard_arrow_down</i></AnchorLink>
        </h1>
        <About show={this.state.showBio ? "appear" : "disappear"}/>
        <Work show={this.state.showWork ? "appear" : "disappear"} zimpShow={this.state.showZimperium ? "appear" : "disappear"} HDShow={this.state.showHD ? "appear" : "disappear"} UNTShow={this.state.showUNT ? "appear" : "disappear"}/>
        <Skills showFrontEnd={this.state.showFrontEnd ? "appear" : "disappear"} showBackEnd={this.state.showBackEnd ? "appear" : "disappear"} showDeploymentDB={this.state.showDeploymentDB ? "appear" : "disappear"}/>
        <Resume show={this.state.showResume ? "appear" : "disappear"}/>
        <Contact show={this.state.showContact ? "appear" : "disappear"}/>
      </React.Fragment>
    );

  }

}
export default Attributes;
