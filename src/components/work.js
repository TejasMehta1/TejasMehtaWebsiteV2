import React from 'react';
import {navigate, Link} from 'gatsby';
// import Card from '@material-ui/core/Card';
// import ProfilePic from "../images/profilePic.jpg"
import PropTypes from "prop-types"

// import Layout from "./layout"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import OrangeWood from '../images/THDOrangeWood.jpg'
import THD from "../images/TheHomeDepot.svg"
import Zimperium from "../images/zimperiumSecurity.svg"
import UNT from "../images/unt.svg"
import KanarysLogo from "../images/kanarys-logo-white.svg"
import Slack from "../images/Slack_RGB_White.svg"
import Amazon from "../images/amazon.svg"
import Google from "../images/google.svg"
import Contrary from "../images/contrary.svg"
const Work = ({show, zimpShow, HDShow, UNTShow, kanShow, slackShow, amazonShow, contraryShow, googleShow}) => {

  return(
    <React.Fragment>
      <div style={{overflow: "hidden"}} className={show}>
      <h1 id="workExperience" className={"dynamicContainer sectionTitle"}>Work Experience: </h1>
        <hr className={"smallWhiteHR"}/>


        <div id="GoogleDivTransition" style={{backgroundColor: "#ffffff"}} className={"WorkSlideLeftDiv WorkDiv dynamicContainer " + googleShow}>
          <div className={"WorkImageDiv"}>
            <Link to={"/google"}>
              <img alt={"Google"} className={"WorkPicture transitionFade InvertColors"} style={{}} src={Google}/>
            </Link>
            {/*<a target="_blank" href="https://www.homedepot.com/" rel="noreferrer" aria-label="homedepot.com">*/}
            {/*  <img alt={"The Home Depot"} className={"WorkPicture transitionFade InvertColors"} src={THD}/>*/}
            {/*</a>*/}
          </div>
          <div style={{filter: "invert(1)"}} className="WorkText">
            <h1>Associate Product Manager Intern</h1>
            <h3>May 2022 - August 2022</h3>
            <h3 className={"JobDescription"}>Phone By Google</h3>
            <div className={"centerButtonMobile"}>
              <button onClick={() => navigate('/google')} aria-label="project" className="ripple buttonWhite">Project</button>
            </div>
          </div>
        </div>

        <div className={"dynamicContainer"}> <hr className={"skillLine"}/> </div>

        <div id="ContraryDivTransition" style={{backgroundColor: "#3165FE"}} className={"WorkSlideRightDiv WorkDiv dynamicContainer " + contraryShow}>
          <div className={"WorkImageDiv"}>
            <Link to={"/contrary"}>
              <img alt={"Contrary"} className={"WorkPicture transitionFade InvertColors"} style={{}} src={Contrary}/>
            </Link>
            {/*<a target="_blank" href="https://www.homedepot.com/" rel="noreferrer" aria-label="homedepot.com">*/}
            {/*  <img alt={"The Home Depot"} className={"WorkPicture transitionFade InvertColors"} src={THD}/>*/}
            {/*</a>*/}
          </div>
          <div className="WorkText">
            <h1>Venture Partner</h1>
            <h3>October 2021 - Present</h3>
            <h3 className={"JobDescription"}>UT Pod</h3>
            <div className={"centerButtonMobile"}>
              <button onClick={() => navigate('/contrary')} aria-label="project" className="ripple buttonWhite">Work</button>
            </div>
          </div>
        </div>

        <div className={"dynamicContainer"}> <hr className={"skillLine"}/> </div>

        <div id="AmazonDivTransition" style={{backgroundColor: "#232F3E"}} className={"WorkSlideLeftDiv WorkDiv dynamicContainer " + amazonShow}>
          <div className={"WorkImageDiv"}>
            <Link to={"/amazon"}>
              <img alt={"Amazon"} className={"WorkPicture transitionFade InvertColors"} style={{}} src={Amazon}/>
            </Link>
            {/*<a target="_blank" href="https://www.homedepot.com/" rel="noreferrer" aria-label="homedepot.com">*/}
            {/*  <img alt={"The Home Depot"} className={"WorkPicture transitionFade InvertColors"} src={THD}/>*/}
            {/*</a>*/}
          </div>
          <div className="WorkText">
            <h1>Software Development Intern</h1>
            <h3>August 2021 - October 2021</h3>
            <h3 className={"JobDescription"}>AWS AI</h3>
            <div className={"centerButtonMobile"}>
              <button onClick={() => navigate('/amazon')} aria-label="project" className="ripple buttonWhite">Project</button>
            </div>
          </div>
        </div>

        <div className={"dynamicContainer"}> <hr className={"skillLine"}/> </div>

        <div id="SlackDivTransition" style={{backgroundColor: "#4A154B"}} className={"WorkSlideRightDiv WorkDiv dynamicContainer " + slackShow}>
          <div className={"WorkImageDiv"}>
            <Link to={"/slack"}>
              <img alt={"Slack"} className={"WorkPicture transitionFade InvertColors"} style={{}} src={Slack}/>
            </Link>
            {/*<a target="_blank" href="https://www.homedepot.com/" rel="noreferrer" aria-label="homedepot.com">*/}
            {/*  <img alt={"The Home Depot"} className={"WorkPicture transitionFade InvertColors"} src={THD}/>*/}
            {/*</a>*/}
          </div>
          <div className="WorkText">
            <h1>Software Engineering Intern</h1>
            <h3>May 2021 - August 2021</h3>
            <h3 className={"JobDescription"}>Files</h3>
            <div className={"centerButtonMobile"}>
              <button onClick={() => navigate('/slack')} aria-label="project" className="ripple buttonWhite">Project</button>
            </div>
          </div>
        </div>

        <div className={"dynamicContainer"}> <hr className={"skillLine"}/> </div>


        <div id="KanDivTransition" style={{backgroundColor: "#f1c101", backgroundImage: "linear-gradient(315deg, #DC8A1F 6.9%, #E8A61B 44.3%, #F1C101  81.3%, #FFD226 92.6%)"}} className={"WorkSlideLeftDiv WorkDiv dynamicContainer " + kanShow}>
          <div className={"WorkImageDiv"}>
            <Link to={"/kanarys"}>
              <img alt={"Kanarys"} className={"WorkPicture transitionFade InvertColors"} style={{}} src={KanarysLogo}/>
            </Link>

          </div>
          <div className="WorkText">
            <h1>Product Management Intern</h1>
            <h3>February 2021 - May 2021</h3>
            <h3 className={"JobDescription"}>Virtual Communities</h3>
            <div className={"centerButtonMobile"}>
              <button onClick={() => navigate('/kanarys')} aria-label="project" className="ripple buttonWhite">Project</button>
            </div>
          </div>
        </div>

        <div className={"dynamicContainer"}> <hr className={"skillLine"}/> </div>


      <div id="HDDivTransition" style={{backgroundImage: `url(${OrangeWood})`}} className={"WorkSlideRightDiv WorkDiv dynamicContainer " + HDShow}>
        <div className={"WorkImageDiv"}>
          <Link to={"/homedepot"}>
            <img alt={"The Home Depot"} className={"WorkPicture transitionFade InvertColors"} src={THD}/>
          </Link>
      {/*<a target="_blank" href="https://www.homedepot.com/" rel="noreferrer" aria-label="homedepot.com">*/}
      {/*  <img alt={"The Home Depot"} className={"WorkPicture transitionFade InvertColors"} src={THD}/>*/}
      {/*</a>*/}
        </div>
      <div className="WorkText">
        <h1>Software Engineering Intern</h1>
        <h3> June 2020 - August 2020</h3>
        <h3 className={"JobDescription"}>Self Checkout</h3>
        <div className={"centerButtonMobile"}>
        <button onClick={() => navigate('/homedepot')} aria-label="project" className="ripple buttonWhite">Project</button>
        </div>
        {/*<ul style={{textAlign: "left"}}>*/}
        {/*<li>Integrated an autocomplete job-address input field in The Home Depot's Self Checkout.</li>*/}
        {/*<li>Designed for The Home Depot's Pro Customers to select previously used job addresses to promote ease of use and minimize errors</li>*/}
        {/*</ul>*/}
      </div>
      </div>


      <div className={"dynamicContainer"}> <hr className={"skillLine"}/> </div>
      <div id="zimperiumDivTransition" className={"ZimperiumDiv WorkDiv dynamicContainer " + zimpShow}>
        <div className={"WorkImageDiv"}>
          <Link to="/zimperium"><
            img alt="Zimperium" className={"WorkPicture transitionFade InvertColors"} src={Zimperium}/>
          </Link>
          {/*<a target="_blank" href="https://zimperium.com" rel="noreferrer" aria-label="zimperium.com"><*/}
          {/*  img alt="Zimperium" className={"WorkPicture transitionFade InvertColors"} src={Zimperium}/>*/}
          {/*</a>*/}
        </div>
        <div className="WorkText">
          <h1>Software Engineering Intern</h1>
          <h3> June 2019 - August 2019</h3>
          <h3 className={"JobDescription"}>ZCrystalball</h3>
          <div className={"centerButtonMobile"}>
          <button onClick={() => navigate('/zimperium')} aria-label="project" className="ripple buttonWhite">Project</button>
          </div>
          {/*<ul style={{textAlign: "left"}}>*/}
          {/*<li>Integrated an autocomplete job-address input field in The Home Depot's Self Checkout.</li>*/}
          {/*<li>Designed for The Home Depot's Pro Customers to select previously used job addresses to promote ease of use and minimize errors</li>*/}
          {/*</ul>*/}
        </div>
      </div>
        <div className={"dynamicContainer"}> <hr className={"skillLine"}/> </div>
        <div id="UNTDivTransition" className={"UNTDiv WorkSlideRightDiv WorkDiv dynamicContainer " + UNTShow}>
          <div className={"WorkImageDiv"}>
            <Link to="/research"><
              img alt="UNT" className={"WorkPicture transitionFade InvertColors"} src={UNT}/>
            </Link>
            {/*<a target="_blank" href="http://neogi.unt.edu/" rel="noreferrer" aria-label="unt.edu"><*/}
            {/*  img alt="UNT" className={"WorkPicture transitionFade InvertColors"} src={UNT}/>*/}
            {/*</a>*/}
          </div>
          <div className="WorkText">
            <h1>Research Fellow</h1>
            <h3> August 2017 - May 2019</h3>
            <h3 className={"JobDescription"}>EFRI Phononics Team</h3>
            <div className={"centerButtonMobile"}>
              <button onClick={() => navigate('/research')} aria-label="project" className="ripple buttonWhite">Project</button>
            </div>
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
  zimpShow: PropTypes.string.isRequired,
  HDShow: PropTypes.string.isRequired,
  UNTShow: PropTypes.string.isRequired
}
export default Work
