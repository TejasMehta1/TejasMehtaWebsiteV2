import React from 'react';
// import Card from '@material-ui/core/Card';
// import ProfilePic from "../images/profilePic.jpg"
import PropTypes from "prop-types"
import ActivstIcon from "../images/ActivstLogo.svg"
import ActivstWindow from "../images/ActivstWindow.png"
import LocoEatsIcon from "../images/LocoEats.svg"
import LocoEatsWindow from "../images/LocoEatsWindow.png"
import CSBAIcon from "../images/csbalogo.svg"
import CSBAWindow from "../images/CSBAWindow.png"
import UpliftStressIcon from "../images/upliftstress.svg"
import UpliftStressWindow from "../images/UpliftStressWindow.png"
import CraveRNIcon from "../images/cravern.svg"
import CraveRNWindow from "../images/CraveRNWindow.png"
import VicayaIcon from "../images/vicaya.svg"
import VicayaWindow from "../images/VicayaWindow.png"
import FlowcusIcon from "../images/flowcus.svg"
import FlowcusWindow from "../images/FlowcusWindow.png"
import SatoriIcon from "../images/satori.svg"
import SatoriWindow from "../images/SatoriWindow.png"
import { faAppStore} from "@fortawesome/free-brands-svg-icons/faAppStore"
import { faGooglePlay} from "@fortawesome/free-brands-svg-icons/faGooglePlay"
import { faGlobe} from "@fortawesome/free-solid-svg-icons/faGlobe"
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub"
import { faAppStoreIos } from "@fortawesome/free-brands-svg-icons/faAppStoreIos"
import TejasdoitIcon from "../images/tejasdoit.svg"
import TejasdoitWindow from "../images/TejasdoitWindow.jpg"
import DroneIcon from "../images/drone.svg"
import DroneWindow from "../images/DroneDeliveryWindow.png"
import AmazefitIcon from "../images/amazefit.svg"
import TQIGIcon from "../images/TQIGDark.svg"
import TQIGWindow from "../images/TQIGWindow.png"
import AmazefitWebPIcon from "../images/amazefit.webp"
// import Layout from "./layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PhotographyWebP from "../images/photography.webp"
import Photography from "../images/photography.png"
import Fade from "@material-ui/core/Fade"
import Card from "@material-ui/core/Card"
import Modal from "@material-ui/core/Modal"
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Projects = ({show, zimpShow, HDShow, UNTShow}) => {

  const [openModal, toggleModal] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [githubLink, setGithubLink] = React.useState("null");
  const [playstoreLink, setPlaystoreLink] = React.useState("null");
  const [appstoreLink, setAppstoreLink] = React.useState("null");
  const [webLink, setWebLink] = React.useState("null");
  const [modalImage, setModalImage] = React.useState(LocoEatsIcon);

  function configureProp(name, github, playstore, appstore, web, image) {
      setModalTitle(name);
      toggleModal(true);
      setGithubLink(github);
      setPlaystoreLink(playstore);
      setAppstoreLink(appstore);
      setWebLink(web);
      setModalImage(image);
  }
  // const iconSize = "3.75em";
  return(
    <React.Fragment>
      <div style={{overflow: "hidden"}} className={show + " dynamicContainer"}>
        <h1 className={"sectionTitle"} style={{marginTop: "100px"}} id="projects">Projects: </h1>
        <hr className={"smallWhiteHR"}/>


        <div className="projectContainer">
          <a onClick={() => configureProp("Activst", "null", "null", "null", "http://activst.org/", ActivstWindow)}>
            <figure className={"projectFigure flowcusFigure"}>
              <figcaption className={"projectCaption"}>
                <p>Link based philanthropy platform for social media activists</p>
                <div className={"figureFrameworksLeft"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  {/*<FontAwesomeIcon className={"faPlatform"} icon={faAppStore}/>*/}
                  {/*<FontAwesomeIcon className={"faPlatform"} icon={faGooglePlay}/>*/}
                  <FontAwesomeIcon className={"faPlatform"} icon={faGlobe}/>
                </div>
                <div className={"figureFrameworksRight"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <h3 className={"faLanguage"}>ReactJS, NodeJS, Firestore, GCP</h3>
                </div>
              </figcaption>
              <img className={"projectIcon"} src={ActivstIcon} alt="ActivstIcon" />
            </figure>
          </a>
        </div>


        <div className="projectContainer">
          <a onClick={() => configureProp("LocoEats", "null", "null", "null", "https://locoeats.org",LocoEatsWindow)}>
          <figure className={"projectFigure locoEatsFigure"}>
            <figcaption className={"projectCaption"}>
              <p>Locally owned and Black owned restaurant discovery service</p>
              <div className={"figureFrameworksLeft"}>
                {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                {/*<FontAwesomeIcon className={"faPlatform"} icon={faAppStore}/>*/}
                {/*<FontAwesomeIcon className={"faPlatform"} icon={faGooglePlay}/>*/}
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
          <a onClick={() => configureProp("UpliftStress", "https://github.com/TejasMehta1/UpliftStressProduction", "null", "null", "https://upliftstress.com",UpliftStressWindow)}>
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
          <a onClick={() => configureProp("CraveRN", "https://github.com/TejasMehta1/CraveRNWeb", "https://play.google.com/store/apps/details?id=com.iamtejasmehta.crave_rn", "https://apps.apple.com/ca/app/cravern/id1503092119", "https://craverightnow.com",CraveRNWindow)}>
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
          <a onClick={() => configureProp("Texas CSBA", "null", "null", "null", "https://texascsba.org",CSBAWindow)}>
            <figure className={"projectFigure locoEatsFigure"}>
              <figcaption className={"projectCaption"}>
                <p>Computer Science and Business Honors Association</p>
                <div className={"figureFrameworksLeft"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <FontAwesomeIcon className={"faPlatform"} icon={faGlobe}/>
                </div>
                <div className={"figureFrameworksRight"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <h3 className={"faLanguage"}>ReactJS, GCP, Firebase</h3>
                </div>
              </figcaption>
              <img className={"projectIcon"} src={CSBAIcon} alt="CSBAIcon" />
            </figure>
          </a>
        </div>

        <div className="projectContainer">
          <a onClick={() => configureProp("TQIG", "null", "null", "null", "https://texasqig.org", TQIGWindow)}>
            <figure className={"projectFigure locoEatsFigure"}>
              <figcaption className={"projectCaption"}>
                <p>Texas Quantitative Investment Group</p>
                <div className={"figureFrameworksLeft"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <FontAwesomeIcon className={"faPlatform"} icon={faGlobe}/>
                </div>
                <div className={"figureFrameworksRight"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <h3 className={"faLanguage"}>Jamstack, Stackbit, ReactJS</h3>
                </div>
              </figcaption>
              <img className={"projectIcon"} src={TQIGIcon} alt="TQIGIcon" />
            </figure>
          </a>
        </div>


        <div className="projectContainer">
          <a onClick={() => configureProp("Vicaya", "null", "null", "null", "https://vicaya-uwvx5irqqa-uc.a.run.app/", VicayaWindow)}>
            <figure className={"projectFigure locoEatsFigure"}>
              <figcaption className={"projectCaption"}>
                <p>Search Engine for automatically crawled Wikipedia pages</p>
                <div className={"figureFrameworksLeft"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
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
          <a onClick={() => configureProp("Flowcus Timer", "https://github.com/TejasMehta1/Flowcus", "https://play.google.com/store/apps/details?id=com.iamtejasmehta.productivitytimer", "null", "null", FlowcusWindow)}>
            <figure className={"projectFigure flowcusFigure"}>
              <figcaption className={"projectCaption"}>
                <p>Pomodoro Timer to maximize productivity by timing breaks and sprints</p>
                <div className={"figureFrameworksLeft"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <FontAwesomeIcon className={"faPlatform"} icon={faGooglePlay}/>
                </div>
                <div className={"figureFrameworksRight"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <h3 className={"faLanguage"}>Java, XML</h3>
                </div>
              </figcaption>
              <img className={"projectIcon"} src={FlowcusIcon} alt="LocoEatsIcon" />
            </figure>
          </a>
        </div>

        <div className="projectContainer">
          <a onClick={() => configureProp("Satori", "null", "https://play.google.com/store/apps/details?id=com.iamtejasmehta.dailyepiphany", "null", "null", SatoriWindow)}>
            <figure className={"projectFigure satoriFigure"}>
              <figcaption className={"projectCaption"}>
                <p>Diary app that reminds you of your past entries and insights</p>
                <div className={"figureFrameworksLeft"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <FontAwesomeIcon className={"faPlatform"} icon={faGooglePlay}/>
                </div>
                <div className={"figureFrameworksRight"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <h3 className={"faLanguage"}>Java, XML</h3>
                </div>
              </figcaption>
              <img className={"projectIcon"} src={SatoriIcon} alt="SatoriIcon" />
            </figure>
          </a>
        </div>

        <div className="projectContainer">
          <a onClick={() => configureProp("Tejas Mehta SGA", "https://github.com/TejasMehta1/SGA", "null", "null", "https://tejasmehta1.github.io/SGA/", TejasdoitWindow)}>
            <figure className={"projectFigure tejastdoitFigure"}>
              <figcaption className={"projectCaption"}>
                <p>My senate campaign website for UNT's student government</p>
                <div className={"figureFrameworksLeft"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <FontAwesomeIcon className={"faPlatform"} icon={faGlobe}/>
                </div>
                <div className={"figureFrameworksRight"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <h3 className={"faLanguage"}>HTML, CSS, Javascript</h3>
                </div>
              </figcaption>
              <img className={"projectIcon"} src={TejasdoitIcon} alt="TejasdoitIcon" />
            </figure>
          </a>
        </div>


        <div className="projectContainer">
          <a onClick={() => configureProp("Drone Delivery Concept", "https://github.com/TejasMehta1/DroneDeliveryConcept", "null", "null", "https://tejasmehta1.github.io/DroneDeliveryConcept/", DroneWindow)}>
            <figure className={"projectFigure droneFigure"}>
              <figcaption className={"projectCaption"}>
                <p>Concept for delivering food and medicine to the elderly during COVID-19</p>
                <div className={"figureFrameworksLeft"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <FontAwesomeIcon className={"faPlatform"} icon={faGlobe}/>
                </div>
                <div className={"figureFrameworksRight"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <h3 className={"faLanguage"}>HTML, CSS, JavaScript</h3>
                </div>
              </figcaption>
              <img style={{filter: "invert(100%) grayscale(100%)", webkitFilter: "invert(100%) grayscale(100%)"}} className={"projectIcon"} src={DroneIcon} alt="LocoEatsIcon" />
            </figure>
          </a>
        </div>

        <div className="projectContainer">
          <a onClick={() => configureProp("Amazefit Bip Watchface", "https://github.com/TejasMehta1/AmazefitBipWatchface", "null", "null", "null", AmazefitIcon)}>
            <figure className={"projectFigure flowcusFigure"}>
              <figcaption className={"projectCaption"}>
                <p>Custom watchface for Amazefit Bip</p>
                <div className={"figureFrameworksLeft"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  {/*<FontAwesomeIcon className={"faPlatform"} icon={faAppStore}/>*/}
                  {/*<FontAwesomeIcon className={"faPlatform"} icon={faGooglePlay}/>*/}
                  {/*<FontAwesomeIcon className={"faPlatform"} icon={faGlobe}/>*/}
                </div>
                <div className={"figureFrameworksRight"}>
                  {/*<FontAwesomeIcon icon={faAppStoreIos}/>*/}
                  <h3 className={"faLanguage"}>JSON</h3>
                </div>
              </figcaption>
              <picture className={"projectIcon"}>
                {/*<source srcSet={AmazefitWebPIcon} type="image/webp"/>*/}
                {/*<source srcSet={AmazefitIcon} type="image/jpeg"/>*/}
                <img className={"projectIcon"} src={AmazefitIcon} alt="Amazefit Watchface"/>
              </picture>
            </figure>
          </a>
        </div>

      </div>
      <Modal
        className={"ProjectModal transitionFade"}
        open={openModal}
        onClose={() => toggleModal(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Fade in={openModal}>
          <div className={"dynamicContainer rootDivModal transitionFade"}>
            <Card style={{padding: "30px", width: "90%", marginLeft:"auto", marginRight: "auto"}}>
              <h1 className={"ModalTitle"}>{modalTitle}</h1>
              <img className={"ModalImage"} src={modalImage} alt={modalTitle}/>
              <p className={"IconHolderModal"}>
                <a href={githubLink} style={{display: githubLink==="null" ? "none": "contents"}}><FontAwesomeIcon className={"ModalIconLink socialIcon transitionFade"} icon={faGithub}/></a>
                <a href={playstoreLink} style={{display: playstoreLink==="null" ? "none": "contents"}}><FontAwesomeIcon className={"ModalIconLink socialIcon transitionFade"} icon={faGooglePlay}/></a>
                <a href={appstoreLink} style={{display: appstoreLink==="null" ? "none": "contents"}}><FontAwesomeIcon className={"ModalIconLink socialIcon transitionFade"} icon={faAppStore}/></a>
                <a href={webLink} style={{display: webLink==="null" ? "none": "contents"}}><FontAwesomeIcon className={"ModalIconLink socialIcon transitionFade"} icon={faGlobe}/></a>
              </p>
              <button
                aria-label="close"
                style={{fontFamily: 'Material Icons', padding: "12px 12px 7px 12px"}}
                className={"buttonBlue ripple"}
                onClick={() => toggleModal(false)}
              >
                <i className="material-icons">close</i>
              </button>
            </Card>
          </div>
        </Fade>
      </Modal>
    </React.Fragment>
  )
}
Projects.propTypes = {
  show: PropTypes.string.isRequired,
}
export default Projects
