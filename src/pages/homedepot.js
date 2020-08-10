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
import DropdownVideo from "../images/ProJobNameDropdown.mp4"
import ZimpArch from "../images/zimpArch.png"
import DropdownSubmit from "../images/submitBlurred.jpg"
import DropdownBlurred from "../images/autocompleteBlurred.jpg"
import DropdownError from "../images/errorRed.png"
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
      autoplay: false,
      autoplaySpeed: 7500
    }
    return (
      // <CADLayout>
      <React.Fragment>
        <LeanHeader/>
        <div style={{height: "40vh", position: "relative", backgroundImage: `url(${OrangeWood})`}}>
          <div style={{
  backgroundImage: `url(${HomeDepot}`,
  height: "40vh",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
}}/>
          {/*<img className={"centerItem verticallyAlign"} style={{}} src={Zimperium}/>*/}
        </div>
        <SEO title="The Home Depot" />


        {/*<div style={{backgroundColor: "#002054"}}>*/}
        {/*<div style={{backgroundColor: "rgba(38,0,71,0.98)"}}>*/}
        {/*  <h1 className={"projectPageTitle"} style={{fontWeight: 600}}>Project</h1>*/}
        {/*  <hr className={"smallWhiteHR"}/>*/}
        {/* <div className={"dynamicContainer"}>*/}
        {/*  <h1 style={{textAlign: "center", paddingBottom: "40vh"}}> INTERNSHIP IN PROGRESS</h1>*/}
        {/* </div>*/}
        {/*</div>*/}
        <div style={{ backgroundColor: "rgba(38,0,71,0.98)" }}>
          <h1 id="zimperiumProjectTitle" className={"projectPageTitle"} style={{ fontWeight: 600 }}>Project</h1>
          <hr className={"smallWhiteHR"}/>
          <h2 style={{textAlign: "center", color: "white", fontFamily: "Quicksand, sans-serif"}}>SELF CHECKOUT: PRO JOB NAME DROPDOWN</h2>
          <p style={{textAlign: "center", color: "white", fontFamily: "Quicksand, sans-serif"}}>REACT, REDUX, JAVA (SPRING), WEBSOCKET, HTML, CSS, JAVASCRIPT, JUNIT, CUCUMBER</p>
          <div className={"dynamicContainer"}>
            <div style={{marginBottom: "1.45rem"}} className={"slickSliderDiv"}>
              <Slider {...settings}>
                {/*<video controls autoPlay>*/}
                {/*  <source src={DropdownVideo}/>*/}
                {/*</video>*/}
                <div>
                  <img src={DropdownBlurred}/>
                </div>
                <div>
                  <img src={DropdownSubmit}/>
                </div>
                <div>
                  <img src={DropdownError}/>
                </div>
              </Slider>
            </div>
            <div className={"col-3"}>
              <h2>Purpose:</h2>
              <p>Provide an easy way for Home Depot's Pro Xtra customers to input the job name/address of their transaction (during self-checkout).
              </p>
              <p>This feature is designed to help Pro Xtra customers organize their jobs with high accuracy for accounting and strategy purposes, while making their shoppers' experience quicker, simpler, and more accurate.</p>
              <p>Pro Xtra is The Home Depot's loyalty program for professional customers. The Home Depot has over 3.4 million Pro Xtra customers responsible for over 40% of their revenue. This feature is being rolled out to The Home
                Depot's largest Pro corporate account and depending on its success, it will continue rolling out to more Pro customers.
              </p>
              {/*<p>This feature targets The Home Depot's largest Pro Xtra customer: Wedgewood. Wedgewood is responsible for over $12 million of Home Depot's revenue every year</p>*/}
                   </div>
            <div className={"col-3"}>
              <h2>Target Audience:</h2>
              <ul>
                <li>
                  <h4>Pro Xtra Customers' Accounting Teams:</h4>
                  <ul>
                    <li>
                      Prevents them from having to manually reconcile mismatched job names by ensuring accuracy and consistency
                    </li>

                    <li>Allows them easily organize transactions based on different job names or addresses and analyze their costs
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Professional Contractors (Visiting the store and buying supplies)</h4>
                  <ul>
                    <li>Can type a few characters and quickly click on the correct address without having to worry about spelling or formatting
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Pro Xtra Customer's Business Analysts</h4>
                  <ul>
                    <li>
                      Can easily search for transactions by job name/address to understand the items, dates, and quantities for each transaction associated with the job
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className={"col-3"}>
              <h2>Features + Scope:</h2>
              <ul>
                <li>
                  Rolling out to ~50,000 registers in ~2,200 stores around North America
                </li>
                <li>
                  Instant autocomplete based on input
                </li>
                <li>
                 On screen keyboard
                </li>
                <li>
                  Guaranteed accuracy of job name entry (no mismatches which database)
                </li>
                <li>
                 Feature flag (only activates feature in some stores)
                </li>
                <li>
                  Phone number recognition (displays job names and activates features depending on the input phone number)
                </li>
              </ul>
            </div>
            <br style={{ clear: "both" }}></br>
            {/*<img src={ZimpArch} alt={"Architecture"}></img>*/}
          </div>
        </div>
      </React.Fragment>
    )

  }

}
export default IndexPage
