import React from 'react';
import Card from '@material-ui/core/Card';
import ProfilePic from "../images/profilePic.jpg"
import PropTypes from "prop-types"
import Layout from "./layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import OrangeWood from '../images/THDOrangeWood.jpg'
import THD from "../images/TheHomeDepot.svg"
import Zimperium from "../images/zimperiumSecurity.svg"

const Work = ({show}) => {

  return(
    <React.Fragment>
      <div className={show}>
      <h1 id="workExperience" className={"dynamicContainer"}>Work Experience: </h1>
      <div style={{backgroundImage: `url(${OrangeWood})`}} className="HomeDepotDiv WorkDiv dynamicContainer">
        <div className={"WorkImageDiv"}>
      <a target="_blank" href="https://www.homedepot.com/"><img className={"WorkPicture transitionFade InvertColors"} src={THD}/></a>
        </div>
      <div className="WorkText">
        <h1>Software Engineering Intern</h1>
        <h3> June 2020 - August 2020</h3>
        <h3 className={"JobDescription"}>Self Checkout</h3>
        <button className="ripple buttonWhite">Project</button>
        {/*<ul style={{textAlign: "left"}}>*/}
        {/*<li>Integrated an autocomplete job-address input field in The Home Depot's Self Checkout.</li>*/}
        {/*<li>Designed for The Home Depot's Pro Customers to select previously used job addresses to promote ease of use and minimize errors</li>*/}
        {/*</ul>*/}
      </div>
      </div>
      <div className={"dynamicContainer"}> <hr className={"skillLine"}/> </div>
      <div className="ZimperiumDiv WorkDiv dynamicContainer">
        <div className={"WorkImageDiv"}>
          <a target="_blank" href="https://zimperium.com"><img className={"WorkPicture transitionFade InvertColors"} src={Zimperium}/></a>
        </div>
        <div className="WorkText">
          <h1>Software Engineering Intern</h1>
          <h3> June 2019 - August 2019</h3>
          <h3 className={"JobDescription"}>ZCrystalball</h3>
          <button className="ripple buttonWhite">Project</button>
          {/*<ul style={{textAlign: "left"}}>*/}
          {/*<li>Integrated an autocomplete job-address input field in The Home Depot's Self Checkout.</li>*/}
          {/*<li>Designed for The Home Depot's Pro Customers to select previously used job addresses to promote ease of use and minimize errors</li>*/}
          {/*</ul>*/}
        </div>
      </div>
      </div>
    </React.Fragment>
  )
}
Work.propTypes = {
  show: PropTypes.string.isRequired,
}
export default Work
