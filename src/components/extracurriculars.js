import React from 'react';
import { Link } from "gatsby"
// import Card from '@material-ui/core/Card';
// import ProfilePic from "../images/profilePic.jpg"
import PropTypes from "prop-types"
// import CAD from "../images/3dmodel2.svg"
import CAD from "../images/3dmodel.png"
import CADWebP from "../images/3dmodel.webp"
import Photography from "../images/photography.png"
import PhotographyWebP from "../images/photography.webp"
// import Layout from "./layout"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import OrangeWood from '../images/THDOrangeWood.jpg'
// import THD from "../images/TheHomeDepot.svg"
// import Zimperium from "../images/zimperiumSecurity.svg"
import TejasMehtaResume from "../images/TejasMehtaResume.pdf"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAppStore } from "@fortawesome/free-brands-svg-icons/faAppStore"
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons/faGooglePlay"
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe"
import AmazefitIcon from "../images/amazefit.svg"
// import { Document, Page, pdfjs } from "react-pdf";
// import 'react-pdf/dist/Page/AnnotationLayer.css';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Extracurriculars = ({show}) => {

  return(
    <React.Fragment>
      <div style={{overflow: "hidden"}} className={show + " dynamicContainer"}>
        <h1 id={"extracurricularsTitle"}>Bonus</h1>
        <div style={{marginBottom: "250px", marginLeft: "auto", marginRight: "auto", width: "100%"}}>


          <div className="circleContainer">
            <Link to="/CAD">
              <figure className={"flowcusFigure circleFigure circle3D"}>
                <figcaption className={"projectCaption"}>
                  <p style={{marginTop: "75px"}} className={"extraCaption"}>3D Modeling</p>
                </figcaption>
                <picture className={"projectIcon"}>
                  <source srcSet={CADWebP} type="image/webp"/>
                  <source srcSet={CAD} type="image/jpeg"/>
                  <img className={"projectIcon"} src={CAD} alt="CAD"/>
                </picture>
                {/*<img className={"projectIcon"} src={CAD} alt="LocoEatsIcon" />*/}
              </figure>
            </Link>
          </div>

          <div className="circleContainer">
            <a target={"_blank"} rel="noreferrer" href={"https://www.instagram.com/tejasmehtaphotography/"}>
              <figure className={"flowcusFigure circleFigure circlePhotography"}>
                <figcaption className={"projectCaption"}>
                  <p style={{marginTop: "75px"}} className={"extraCaption"}>Photography</p>
                </figcaption>
                <picture className={"projectIcon"}>
                  <source srcSet={PhotographyWebP} type="image/webp"/>
                    <source srcSet={Photography} type="image/jpeg"/>
                      <img className={"projectIcon"} src={Photography} alt="Photography"/>
                </picture>
                {/*<img className={"projectIcon"} src={Photography} alt="LocoEatsIcon" />*/}
              </figure>
            </a>
          </div>


        </div>
      </div>
    </React.Fragment>
  )
}
Extracurriculars.propTypes = {
  show: PropTypes.string.isRequired,
}
export default Extracurriculars
