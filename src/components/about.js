
import React from 'react';
import Card from '@material-ui/core/Card';
import ProfilePic from "../images/profilePic.jpg"
import PropTypes from "prop-types"
// import Layout from "./layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub"
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook"

const About = ({show}) => {

  return(
    <React.Fragment>
    <div id="aboutLocation"></div>
    <div className={show + " dynamicContainer"} id="hippl">
      <div style={{marginLeft:"auto", marginRight:"auto", maxWidth: "160px"}}>
      <img alt="TejasMehtaProfilePic" id="profilePic" src={ProfilePic}/>
      </div>
      <Card className="bioCard">
        <p>Hi, I'm a<a className="textLink transitionFade" rel="noreferrer" target="_blank" href="https://csb.utexas.edu"><b>Texas CSB Honors</b> </a>  student at UT Austin majoring in <b>Computer Science, Finance, and Business Honors</b> and pursuing an <b>Applied Statistical Modeling</b> certificate.
      </p>
        <p>I am a full stack web and mobile developer. I enjoy creating fast, beautiful, and useful products. I'm especially passionate about mental health and education. </p>
        <p>When I'm not coding, you can find me hunting for food trucks, lifting weights, or driving down a twisty road. I also really enjoy turning my shower into a concert hall and dancing to bhangra.</p>
        {/*<p>Outside of programming I enjoy singing, dancing, and  develop machine learning curriculum for XLabs</p>*/}
        <div style={{width: "225px"}} className={"container center"}>
        <a target={"_blank"} rel="noreferrer" aria-label={"Github"} href={"https://github.com/TejasMehta1"}><FontAwesomeIcon  className={"socialIcon transitionFade"} icon={faGithub}/></a>
        <a target={"_blank"} rel="noreferrer" aria-label={"LinkedIn"} href={"https://www.linkedin.com/in/tejasmehta14"}><FontAwesomeIcon  className={"socialIcon transitionFade"} icon={faLinkedin}/></a>
        <a target={"_blank"} rel="noreferrer" aria-label={"Facebook"} href={"https://www.facebook.com/tejasmehta.fb"}><FontAwesomeIcon  className={"socialIcon transitionFade"} icon={faFacebook}/></a>
        </div>
      </Card>
      </div>
    </React.Fragment>
  )
}
About.propTypes = {
  show: PropTypes.string.isRequired,
}
export default About
