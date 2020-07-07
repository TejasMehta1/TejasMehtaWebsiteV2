import React from "react"
// import { Link } from "gatsby"
// import About from "../components/about"

import Layout from "../components/layout"
import CADLayout from "../components/cadlayout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Slider from "react-slick";
import { Link } from "gatsby"
import LeanHeader from "../components/leanheader"
import UNT from "../images/unt.svg"
import CrystalBall from "../images/CrystalBall.svg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Map from "../images/Map.png"
import Multifilter from "../images/Multifilter.png"
import VPC from "../images/VPC.png"
import ZimpArch from "../images/zimpArch.png"
import EFRI from "../images/EFRI_group.jpg"
import "../components/tejas.css"


import Card from "@material-ui/core/Card"
// import logo from "../images/TMLogoCircle.png"
// import logowhite from "../images/TMLogoCircleWhite.png"
class IndexPage extends React.Component {

  render(){
    return (
      // <CADLayout>
      <React.Fragment>
        <LeanHeader/>
        <div style={{height: "40vh", position: "relative"}} className={"UNTDiv"}>
          <div style={{backgroundImage: `url(${UNT}`, height: "40vh", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}></div>
          {/*<img className={"centerItem verticallyAlign"} style={{}} src={Zimperium}/>*/}
        </div>
        <SEO title="Research" />


        {/*<div style={{backgroundColor: "#002054"}}>*/}
        <div style={{backgroundColor: "rgba(38,0,71,0.98)"}}>
          <h1 className={"projectPageTitle"} style={{fontWeight: 600}}>Research</h1>
          <hr className={"smallWhiteHR"}/>
          <div className={"dynamicContainer"}>
          <img src={EFRI}/>
            <div className={"col-2"}>
              <h2>Purpose:</h2>
              <p>The need for a secure and efficient based encryption is at its peak today as users, hospitals, governments, and corporations are working with increasingly sensitive data. Current methods of encryption are often inefficient, expensive, or insecure</p>
              <p>The goal of this research study was to develop a non-interceptible form of communication utilizing the properties of Anderson Localization and Quantum Tunneling. The effect is that a message is practically undetectable after being sent until it is recieved so there is no scope for interception</p>
            </div>
            <div className={"col-2"}>
              <h2>Outcomes:</h2>
              <ul>
              <li>
              <p>Utilized RLC circuits that induce quantum tunneling to reduce a signal to the noise level by the sender (destructed by ~75%) and restore the signal by ~97% by the reciever</p>
              </li>
                <li>
                <p>Authored paper that won 2nd place in the engineering category in the Texas Junior Academy of Science</p>
                </li>
                <li>
                  <p>Bonus: Developed <a rel={"noreferrer"} target={"_blank"} href={"http://neogi.unt.edu/"} className={"textLink textLinkLight"}>Research Website</a></p>
                </li>
              </ul>
            </div>

            <br style={{clear:"both"}}></br>
          </div>
        </div>
      </React.Fragment>
    )

  }

}
export default IndexPage
