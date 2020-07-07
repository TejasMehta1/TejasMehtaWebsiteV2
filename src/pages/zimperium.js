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
import Zimperium from "../images/zimperiumSecurity.svg"
import CrystalBall from "../images/CrystalBall.svg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../components/tejas.css"
import Map from "../images/Map.png"
import Multifilter from "../images/Multifilter.png"
import VPC from "../images/VPC.png"
import ZimpArch from "../images/zimpArch.png"
import Present1 from "../images/CBPresent1.jpg"
import Present2 from "../images/CBPresent2.jpg"

import Card from "@material-ui/core/Card"
// import logo from "../images/TMLogoCircle.png"
// import logowhite from "../images/TMLogoCircleWhite.png"
class IndexPage extends React.Component {

  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7500
    };
    return (
      // <CADLayout>
      <React.Fragment>
        <LeanHeader/>
        <div style={{height: "40vh", position: "relative"}} className={"ZimperiumDiv"}>
          <div style={{
  backgroundImage: `url(${Zimperium}`,
  height: "40vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "60%",
  backgroundPosition: "center"
}}/>
          {/*<img className={"centerItem verticallyAlign"} style={{}} src={Zimperium}/>*/}
        </div>
        <SEO title="Zimperium" />


        {/*<div style={{backgroundColor: "#002054"}}>*/}
        <div style={{backgroundColor: "rgba(38,0,71,0.98)"}}>
          <h1 id="zimperiumProjectTitle" className={"projectPageTitle"} style={{fontWeight: 600}}>Project</h1>
          <hr className={"smallWhiteHR"}/>
          <img className={"centerItem"} src={CrystalBall}/>
          <div className={"dynamicContainer"}>
            <Slider {...settings}>
              <div>
                <img src={Map}/>
              </div>
              <div>
               <img src={Multifilter}/>
              </div>
              <div>
                <img src={VPC}/>
              </div>
              <div>
                <img src={Present1}/>
              </div>
              <div>
                <img src={Present2}/>
              </div>
            </Slider>
            <div className={"col-3"}>
            <h2>Purpose:</h2>
            <p>Provide a "crystal ball" view into Zimperium's worldwide cloud infrastructure <br/><br/> Displays key information for each VPC including:</p>
              <ul>
                <li>
                  Location
                </li>
                <li>
                  Cloud Provider
                </li>
                <li>
                  Usage Metrics
                </li>
                <li>
                  Version
                </li>
            </ul>
            </div>
            <div className={"col-3"}>
              <h2>Target Audience:</h2>
              <ul>
                <li>
                  <h4>Executives:</h4>
                  <ul>
                    <li>Recieve a macroscopic view on Zimperium's customer base to identify
                    which regions and VPCs are the most crucial and where to expand next</li>
                  </ul>
                </li>
                <li>
                  <h4>Engineering</h4>
                  <ul>
                    <li>Easily find crucial endpoints for each VPC for logging, debugging, and testing purposes and find its device breakdown and version</li>
                    <li>Utilize Crystalball's API to automatically add new VPCs to the website using the deploy tool</li>
                  </ul>
                </li>
                <li>
                  <h4>Sales and Customer Success</h4>
                  <ul>
                    <li>Find key metrics to advertise regarding Zimperium's success and quickly see Zimperium's most important customers</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className={"col-3"}>
              <h2>Key Features:</h2>
              <ul>
                <li>
                  Macroscopic Map View
                </li>
                <li>
                  Autocomplete search
                </li>
                <li>
                  Multi-filtered search in aggregate data
                </li>
                <li>
                  Datadog integration
                </li>
                <li>
                  Realtime updates (no refresh)
                </li>
                <li>
                  Crystalball API + Deploy tool
                </li>
                <li>
                  Restricted Google Auth
                </li>
              </ul>
            </div>
            <br style={{clear:"both"}}></br>
            <img src={ZimpArch} alt={"Architecture"}></img>
          </div>
        </div>
      </React.Fragment>
    )

  }

}
export default IndexPage
