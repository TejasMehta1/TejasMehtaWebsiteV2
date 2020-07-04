import React from 'react';
// import Card from '@material-ui/core/Card';
// import ProfilePic from "../images/profilePic.jpg"
import PropTypes from "prop-types"
import LocoEatsIcon from "../images/LocoEats.svg"
import CSBAIcon from "../images/csbalogo.svg"
import UpliftStressIcon from "../images/upliftstress.svg"
import CraveRNIcon from "../images/cravern.svg"
import VicayaIcon from "../images/vicaya.svg"
import FlowcusIcon from "../images/flowcus.svg"
import SatoriIcon from "../images/satori.svg"
import { faAppStore} from "@fortawesome/free-brands-svg-icons/faAppStore"
import { faGooglePlay} from "@fortawesome/free-brands-svg-icons/faGooglePlay"
import { faGlobe} from "@fortawesome/free-solid-svg-icons/faGlobe"
import { faAppStoreIos } from "@fortawesome/free-brands-svg-icons/faAppStoreIos"
import TejasdoitIcon from "../images/tejasdoit.svg"
import DroneIcon from "../images/drone.svg"
import AmazefitIcon from "../images/amazefit.svg"
// import Layout from "./layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Projects = ({show, zimpShow, HDShow, UNTShow}) => {
  // const iconSize = "3.75em";
  return(
    <React.Fragment>
      <div style={{overflow: "hidden"}} className={show + " dynamicContainer"}>
        <h1 style={{marginTop: "100px"}} id="projects">Projects: </h1>
        <div className="projectContainer">
          <a href={"https://locoeats.org"}>
          <figure className={"projectFigure locoEatsFigure"}>
            <figcaption className={"projectCaption"}>
              <p>Locally owned and Black owned restaurant discovery service</p>
              <div className={"figureFrameworksLeft"}>
                {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                <FontAwesomeIcon className={"faPlatform"} icon={faAppStore}/>
                <FontAwesomeIcon className={"faPlatform"} icon={faGooglePlay}/>
                <FontAwesomeIcon className={"faPlatform"} icon={faGlobe}/>
              </div>
              <div className={"figureFrameworksRight"}>
                {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <h3 className={"faLanguage"}>ReactJS, Python (Flask), PostgreSQL, GCP</h3>
              </div>
            </figcaption>
          <img className={"projectIcon"} src={LocoEatsIcon} alt="LocoEatsIcon" />
        </figure>
          </a>
        </div>




        <div className="projectContainer">
          <a href={"https://upliftstress.com"}>
            <figure className={"projectFigure upliftStressFigure"}>
              <figcaption className={"projectCaption"}>
                <p>Matches stressed students with trained peer supporters</p>
                <div className={"figureFrameworksLeft"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <FontAwesomeIcon className={"faPlatform"} icon={faGlobe}/>
                </div>
                <div className={"figureFrameworksRight"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <h3 className={"faLanguage"}>HTML, CSS, JavaScript, JQuery, Firebase</h3>
                </div>
              </figcaption>
              <img className={"projectIcon"} src={UpliftStressIcon} alt="UpliftStressIcon" />
            </figure>
          </a>
        </div>



        <div className="projectContainer">
          <a href={"https://craverightnow.com"}>
            <figure className={"projectFigure craveRNFigure"}>
              <figcaption className={"projectCaption"}>
                <p>Quiz based restaurant discovery service for restaurants nearby</p>
                <div className={"figureFrameworksLeft"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <FontAwesomeIcon className={"faPlatform"} icon={faAppStore}/>
                  <FontAwesomeIcon className={"faPlatform"} icon={faGooglePlay}/>
                  <FontAwesomeIcon className={"faPlatform"} icon={faGlobe}/>
                </div>
                <div className={"figureFrameworksRight"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <h3 className={"faLanguage"}>Python (Flask), HTML, CSS, Dart, Flutter, Firebase, GCP</h3>
                </div>
              </figcaption>
              <img className={"projectIcon"} src={CraveRNIcon} alt="LocoEatsIcon" />
            </figure>
          </a>
        </div>

        <div className="projectContainer">
          <a href={"https://texascsba.org"}>
            <figure className={"projectFigure locoEatsFigure"}>
              <figcaption className={"projectCaption"}>
                <p>Matches stressed students with trained peer supporters</p>
                <div className={"figureFrameworksLeft"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <FontAwesomeIcon className={"faPlatform"} icon={faGlobe}/>
                </div>
                <div className={"figureFrameworksRight"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <h3 className={"faLanguage"}>HTML, CSS, JavaScript, JQuery, Firebase</h3>
                </div>
              </figcaption>
              <img className={"projectIcon"} src={CSBAIcon} alt="CSBAIcon" />
            </figure>
          </a>
        </div>


        <div className="projectContainer">
          <a href={"https://vicaya-uwvx5irqqa-uc.a.run.app"}>
            <figure className={"projectFigure locoEatsFigure"}>
              <figcaption className={"projectCaption"}>
                <p>Locally owned and Black owned restaurant discovery service</p>
                <div className={"figureFrameworksLeft"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <FontAwesomeIcon className={"faPlatform"} icon={faAppStore}/>
                  <FontAwesomeIcon className={"faPlatform"} icon={faGooglePlay}/>
                  <FontAwesomeIcon className={"faPlatform"} icon={faGlobe}/>
                </div>
                <div className={"figureFrameworksRight"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <h3 className={"faLanguage"}>Java (Spring), HTML, CSS, GCP</h3>
                </div>
              </figcaption>
              <img className={"projectIcon"} src={VicayaIcon} alt="LocoEatsIcon" />
            </figure>
          </a>
        </div>

        <div className="projectContainer">
          <a href={"https://vicaya-uwvx5irqqa-uc.a.run.app"}>
            <figure className={"projectFigure flowcusFigure"}>
              <figcaption className={"projectCaption"}>
                <p>Locally owned and Black owned restaurant discovery service</p>
                <div className={"figureFrameworksLeft"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <FontAwesomeIcon className={"faPlatform"} icon={faAppStore}/>
                  <FontAwesomeIcon className={"faPlatform"} icon={faGooglePlay}/>
                  <FontAwesomeIcon className={"faPlatform"} icon={faGlobe}/>
                </div>
                <div className={"figureFrameworksRight"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <h3 className={"faLanguage"}>Java (Spring), HTML, CSS, GCP</h3>
                </div>
              </figcaption>
              <img className={"projectIcon"} src={FlowcusIcon} alt="LocoEatsIcon" />
            </figure>
          </a>
        </div>

        <div className="projectContainer">
          <a href={"https://vicaya-uwvx5irqqa-uc.a.run.app"}>
            <figure className={"projectFigure satoriFigure"}>
              <figcaption className={"projectCaption"}>
                <p>Locally owned and Black owned restaurant discovery service</p>
                <div className={"figureFrameworksLeft"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <FontAwesomeIcon className={"faPlatform"} icon={faAppStore}/>
                  <FontAwesomeIcon className={"faPlatform"} icon={faGooglePlay}/>
                  <FontAwesomeIcon className={"faPlatform"} icon={faGlobe}/>
                </div>
                <div className={"figureFrameworksRight"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <h3 className={"faLanguage"}>Java (Spring), HTML, CSS, GCP</h3>
                </div>
              </figcaption>
              <img className={"projectIcon"} src={SatoriIcon} alt="LocoEatsIcon" />
            </figure>
          </a>
        </div>

        <div className="projectContainer">
          <a href={"https://vicaya-uwvx5irqqa-uc.a.run.app"}>
            <figure className={"projectFigure tejastdoitFigure"}>
              <figcaption className={"projectCaption"}>
                <p>Locally owned and Black owned restaurant discovery service</p>
                <div className={"figureFrameworksLeft"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <FontAwesomeIcon className={"faPlatform"} icon={faAppStore}/>
                  <FontAwesomeIcon className={"faPlatform"} icon={faGooglePlay}/>
                  <FontAwesomeIcon className={"faPlatform"} icon={faGlobe}/>
                </div>
                <div className={"figureFrameworksRight"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <h3 className={"faLanguage"}>Java (Spring), HTML, CSS, GCP</h3>
                </div>
              </figcaption>
              <img className={"projectIcon"} src={TejasdoitIcon} alt="LocoEatsIcon" />
            </figure>
          </a>
        </div>


        <div className="projectContainer">
          <a href={"https://vicaya-uwvx5irqqa-uc.a.run.app"}>
            <figure className={"projectFigure droneFigure"}>
              <figcaption className={"projectCaption"}>
                <p>Locally owned and Black owned restaurant discovery service</p>
                <div className={"figureFrameworksLeft"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <FontAwesomeIcon className={"faPlatform"} icon={faAppStore}/>
                  <FontAwesomeIcon className={"faPlatform"} icon={faGooglePlay}/>
                  <FontAwesomeIcon className={"faPlatform"} icon={faGlobe}/>
                </div>
                <div className={"figureFrameworksRight"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <h3 className={"faLanguage"}>Java (Spring), HTML, CSS, GCP</h3>
                </div>
              </figcaption>
              <img style={{filter: "invert(100%) grayscale(100%)", webkitFilter: "invert(100%) grayscale(100%)"}} className={"projectIcon"} src={DroneIcon} alt="LocoEatsIcon" />
            </figure>
          </a>
        </div>

        <div className="projectContainer">
          <a href={"https://vicaya-uwvx5irqqa-uc.a.run.app"}>
            <figure className={"projectFigure flowcusFigure"}>
              <figcaption className={"projectCaption"}>
                <p>Locally owned and Black owned restaurant discovery service</p>
                <div className={"figureFrameworksLeft"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <FontAwesomeIcon className={"faPlatform"} icon={faAppStore}/>
                  <FontAwesomeIcon className={"faPlatform"} icon={faGooglePlay}/>
                  <FontAwesomeIcon className={"faPlatform"} icon={faGlobe}/>
                </div>
                <div className={"figureFrameworksRight"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <h3 className={"faLanguage"}>Java (Spring), HTML, CSS, GCP</h3>
                </div>
              </figcaption>
              <img className={"projectIcon"} src={AmazefitIcon} alt="LocoEatsIcon" />
            </figure>
          </a>
        </div>

      </div>
    </React.Fragment>
  )
}
Projects.propTypes = {
  show: PropTypes.string.isRequired,
}
export default Projects
