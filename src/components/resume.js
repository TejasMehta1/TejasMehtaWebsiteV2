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
import TejasMehtaResume from "../images/TejasMehtaResume.pdf"
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = ({show}) => {
  function removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
    textLayers.forEach(layer => {
      const { style } = layer;
      style.top = "0";
      style.left = "0";
      style.transform = "";
    });
    console.log("done");
  }

  return(
    <React.Fragment>
      <div style={{overflow: "hidden", marginTop: "150px"}} className={show + " dynamicContainer"}>
        <h1 style={{float: "left"}} id={"resumeTitle"}>Resume: </h1>
        <button onClick={() => window.open(TejasMehtaResume)} style={{float: "right"}} className={"buttonWhite ripple"}>Download</button>
        {/*<iframe id={"resumeFrame"}*/}
        {/*  // src="https://utexas-my.sharepoint.com/personal/tm33448_austin_eid_utexas_edu/_layouts/15/Doc.aspx?sourcedoc={99535ca3-20c1-48f8-90ac-bb51549cd1df}&amp;action=embedview&amp;wdStartOn=1"*/}
        {/* src={TejasMehtaResume}*/}
        {/*   frameBorder="0">*/}
        {/*</iframe>*/}
        <br style={{clear: "both"}}/>
        <div style={{marginTop: "40px"}}>
          <div id={"TejasMehtaResume"}>
        <Document

          file={TejasMehtaResume}
          renderAnnotations={true}
          onLoadSuccess={removeTextLayerOffset}
        >
          <Page pageNumber={1} />
        </Document>  {/*<iframe id={"resumeIFrame"} className="resumeFrame" src={TejasMehtaResume + "#zoom=FitH"} align="middle"></iframe>*/}
        </div>
        </div>
      </div>
    </React.Fragment>
  )
}
Resume.propTypes = {
  show: PropTypes.string.isRequired,
}
export default Resume
