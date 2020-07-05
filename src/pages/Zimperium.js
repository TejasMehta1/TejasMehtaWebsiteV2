import React from "react"
// import { Link } from "gatsby"
// import About from "../components/about"

import Layout from "../components/layout"
import CADLayout from "../components/cadlayout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Link } from "gatsby"
import LeanHeader from "../components/leanheader"
import Zimperium from "../images/zimperiumSecurity.svg"
import CrystalBall from "../images/CrystalBall.svg"
import Card from "@material-ui/core/Card"
// import logo from "../images/TMLogoCircle.png"
// import logowhite from "../images/TMLogoCircleWhite.png"
class IndexPage extends React.Component {

  render(){
    return (
      // <CADLayout>
      <React.Fragment>
        <LeanHeader/>
        <div style={{height: "40vh", position: "relative"}} className={"ZimperiumDiv"}>
          <div style={{backgroundImage: `url(${Zimperium}`, height: "40vh", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}></div>
          {/*<img className={"centerItem verticallyAlign"} style={{}} src={Zimperium}/>*/}
        </div>
        <SEO title="Zimperium" />


        {/*<div style={{backgroundColor: "#002054"}}>*/}
        <div style={{backgroundColor: "rgba(38,0,71,0.98)"}}>
          <h1 id="zimperiumProjectTitle" className={"projectPageTitle"} style={{fontWeight: 600}}>Project</h1>
          <hr className={"smallWhiteHR"}/>
          <img className={"centerItem"} src={CrystalBall}/>
          <div className={"dynamicContainer"}>
            <h2>Purpose:</h2>
            <p>Provide a "crystal ball" view into Zimperium's worldwide cloud infrastructure</p>
          </div>
        </div>
      </React.Fragment>
    )

  }

}
export default IndexPage
