import React from "react"
// import { Link } from "gatsby"
// import About from "../components/about"

import Layout from "../components/layout"
import CADLayout from "../components/cadlayout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Link } from "gatsby"
import LeanHeader from "../components/leanheader"
import CADPhone from "../images/3dphone.svg"
import "./tejas.css"
import Card from "@material-ui/core/Card"
// import logo from "../images/TMLogoCircle.png"
// import logowhite from "../images/TMLogoCircleWhite.png"
class IndexPage extends React.Component {

  render(){
    return (
      // <CADLayout>
      <React.Fragment>
        <LeanHeader/>
        <div style={{backgroundImage: `url(${CADPhone})`, backgroundPosition: "center center", height: "40vh", backgroundSize: "cover", backgroundColor: "black"}}></div>
        <SEO title="CAD" />


        {/*<div style={{backgroundColor: "#002054"}}>*/}
        <div style={{backgroundColor: "rgba(38,0,71,0.98)"}}>
          <h1 id="portfolioTitle" className={"projectPageTitle"} style={{fontWeight: 600}}>Portfolio</h1>
          <hr className={"smallWhiteHR"}/>
          <div  className={"dynamicContainer iframeContainer"}>
          <iframe
  src="https://myhub.autodesk360.com/ue29b0f70/shares/public/SH7f1edQT22b515c761e3f0293c463a1463a?mode=embed"
  align="middle" width="100%" height="768" allowFullScreen="true" webkitallowfullscreen="true"
  mozallowfullscreen="true" frameBorder="0"/>
          </div>


          <div  className={"dynamicContainer iframeContainer"}>
            <iframe
              src="https://myhub.autodesk360.com/ue29b0f70/shares/public/SH7f1edQT22b515c761e928fdc0547593d8b?mode=embed"
              align="middle" width="100%" height="768" allowFullScreen="true" webkitallowfullscreen="true"
              mozallowfullscreen="true" frameBorder="0"/>
          </div>

          <div  className={"dynamicContainer iframeContainer"}>
            <iframe
              src="https://myhub.autodesk360.com/ue29b0f70/shares/public/SH7f1edQT22b515c761e452426dd2c929372?mode=embed"
              align="middle" width="100%" height="768" allowFullScreen="true" webkitallowfullscreen="true"
              mozallowfullscreen="true" frameBorder="0"/>
          </div>

          <div  className={"dynamicContainer iframeContainer"}>
            <iframe
              src="https://myhub.autodesk360.com/ue29b0f70/shares/public/SH7f1edQT22b515c761e8e581b7a3d30618c?mode=embed"
              align="middle" width="100%" height="768" allowFullScreen="true" webkitallowfullscreen="true"
              mozallowfullscreen="true" frameBorder="0"/>
          </div>

          <div  className={"dynamicContainer iframeContainer"}>
            <iframe
              src="https://myhub.autodesk360.com/ue29b0f70/shares/public/SH7f1edQT22b515c761e1799a8f8bfa74b8c?mode=embed"
              align="middle" width="100%" height="768" allowFullScreen="true" webkitallowfullscreen="true"
              mozallowfullscreen="true" frameBorder="0"/>
          </div>

          <div  className={"dynamicContainer iframeContainer"}>
            <iframe
              src="https://myhub.autodesk360.com/ue29b0f70/shares/public/SH7f1edQT22b515c761ee13b6e7e1e25a745?mode=embed"
              align="middle" width="100%" height="768" allowFullScreen="true" webkitallowfullscreen="true"
              mozallowfullscreen="true" frameBorder="0"/>
          </div>

          <div  className={"dynamicContainer iframeContainer"}>
            <iframe
              src="https://myhub.autodesk360.com/ue29b0f70/shares/public/SH7f1edQT22b515c761e9f3a2a4edbe29f8f?mode=embed"
              align="middle" width="100%" height="768" allowFullScreen="true" webkitallowfullscreen="true"
              mozallowfullscreen="true" frameBorder="0"/>
          </div>

        </div>
      </React.Fragment>
    )

  }

}
export default IndexPage
