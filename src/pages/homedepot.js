import React from "react"
// import { Link } from "gatsby"
// import About from "../components/about"

import Layout from "../components/layout"
import CADLayout from "../components/cadlayout"
// import Image from "../components/image"
import SEO from "../components/seo"
import "../components/tejas.css"
import Slider from "react-slick";
import { Link } from "gatsby"
import LeanHeader from "../components/leanheader"
import HomeDepot from "../images/TheHomeDepot.svg"
import OrangeWood from "../images/THDOrangeWood.jpg"
import CrystalBall from "../images/CrystalBall.svg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Map from "../images/Map.png"
import Multifilter from "../images/Multifilter.png"
import VPC from "../images/VPC.png"
import ZimpArch from "../images/zimpArch.png"
import EFRI from "../images/EFRI_group.jpg"


import Card from "@material-ui/core/Card"
// import logo from "../images/TMLogoCircle.png"
// import logowhite from "../images/TMLogoCircleWhite.png"
class IndexPage extends React.Component {

  render(){
    return (
      // <CADLayout>
      <React.Fragment>
        <LeanHeader/>
        <div style={{height: "40vh", position: "relative", backgroundImage: `url(${OrangeWood})`}}>
          <div style={{backgroundImage: `url(${HomeDepot}`, height: "40vh", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}></div>
          {/*<img className={"centerItem verticallyAlign"} style={{}} src={Zimperium}/>*/}
        </div>
        <SEO title="Project" />


        {/*<div style={{backgroundColor: "#002054"}}>*/}
        <div style={{backgroundColor: "rgba(38,0,71,0.98)"}}>
          <h1 className={"projectPageTitle"} style={{fontWeight: 600}}>Project</h1>
          <hr className={"smallWhiteHR"}/>
         <div className={"dynamicContainer"}>
          <h1 style={{textAlign: "center", paddingBottom: "40vh"}}> INTERNSHIP IN PROGRESS</h1>
         </div>
        </div>
      </React.Fragment>
    )

  }

}
export default IndexPage
