
import React from 'react';
import Card from '@material-ui/core/Card';
import ProfilePic from "../images/profilePic.jpg"
import PropTypes from "prop-types"
import Layout from "./layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const About = ({show}) => {

  return(
    <React.Fragment>
    <div id="aboutLocation"></div>
    <div className={show + " dynamicContainer"} id="hippl">
      <div style={{marginLeft:"auto", marginRight:"auto", maxWidth: "160px"}}>
      <img id="profilePic" src={ProfilePic}/>
      </div>
      <Card className="bioCard">
        <p>Hi, I'm a<a className="textLink" target="_blank" href="https://csb.utexas.edu"><b>Texas CSB Honors</b> </a>  student at UT Austin majoring in <b>Computer Science, Management, and Business Honors</b> and pursuing an <b>Applied Statistical Modeling</b> certificate.
      </p>
        <p>I am a full stack web and mobile developer. I enjoy creating fast, beautiful, and useful products. I'm especially passionate about mental health and education. </p>
        {/*<p>Outside of programming I enjoy singing, dancing, and  develop machine learning curriculum for XLabs</p>*/}
      </Card>
      </div>
    </React.Fragment>
  )
}
About.propTypes = {
  show: PropTypes.string.isRequired,
}
export default About
