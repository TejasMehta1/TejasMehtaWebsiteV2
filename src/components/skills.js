
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import PythonPic from "../images/python.png"
import JavaPic from "../images/java.png"
import CPic from "../images/CLogo.svg"
import PytorchPic from "../images/pytorch.png"
import HTMLPic from "../images/html.png"
import ReactPic from "../images/react.svg"
import CSSPic from "../images/css.jpg"
import FlutterPic from "../images/flutter.svg"
import GCPPic from "../images/gcp.svg"
import PostgreSQLPic from "../images/postgresql.png"
import FirebasePic from "../images/firebase.svg"
import DockerPic from "../images/docker.svg"
const Skills = () => {

  return(
    <React.Fragment>
      <div style={{marginTop: "40px"}} className={"dynamicContainer"}>
        <h1 className={"quicksand"}>Technical Skills:</h1>
        <hr className={"skillLine"}/>
      <h2 className={"quicksand"}>Front End</h2>
        <div>
          <figure className={"codingLanguage"}>
            <img alt={"React"} className={"codingLanguage"} src={ReactPic}/>
            <figcaption className={"codingLanguage"}>React</figcaption>
          </figure>
          <figure className={"codingLanguage"}>
            <img alt={"HTML"} className={"codingLanguage"} src={HTMLPic}/>
            <figcaption className={"codingLanguage"}>HTML</figcaption>
          </figure>
          <figure className={"codingLanguage"}>
            <img alt={"CSS"} className={"codingLanguage"} src={CSSPic}/>
            <figcaption className={"codingLanguage"}>CSS</figcaption>
          </figure>
          <figure className={"codingLanguage"}>
            <img alt={"Flutter"} className={"codingLanguage"} src={FlutterPic}/>
            <figcaption className={"codingLanguage"}>Flutter</figcaption>
          </figure>
          <br className={"clear"}/>
          <hr className={"skillLine"}/>
        </div>

      <h2 className={"quicksand"}>Back End</h2>
      <div>
        <figure className={"codingLanguage"}>
        <img alt={"Python"} className={"codingLanguage"} src={PythonPic}/>
        <figcaption className={"codingLanguage"}>Python</figcaption>
        </figure>
        <figure className={"codingLanguage"}>
          <img alt={"Java"} className={"codingLanguage"} src={JavaPic}/>
          <figcaption className={"codingLanguage"}>Java</figcaption>
        </figure>
        <figure className={"codingLanguage"}>
          <img alt={"C"} className={"codingLanguage"} src={CPic}/>
          <figcaption className={"codingLanguage"}>C</figcaption>
        </figure>
        <figure className={"codingLanguage"}>
          <img alt={"Pytorch"} className={"codingLanguage"} src={PytorchPic}/>
          <figcaption className={"codingLanguage"}>Pytorch</figcaption>
        </figure>
        <br className={"clear"}/>
        <hr className={"skillLine"}/>
      </div>
      <h2 className={"quicksand"}>Deployment+Databases</h2>
        <div>
          <figure className={"codingLanguage"}>
            <img alt={"Google Cloud Platform"} className={"codingLanguage"} src={GCPPic}/>
            <figcaption className={"codingLanguage"}>GCP</figcaption>
          </figure>
          <figure className={"codingLanguage"}>
            <img alt={"Docker"} className={"codingLanguage"} src={DockerPic}/>
            <figcaption className={"codingLanguage"}>Docker</figcaption>
          </figure>
          <figure className={"codingLanguage"}>
            <img alt={"PostgreSQL SQL"} className={"codingLanguage"} src={PostgreSQLPic}/>
            <figcaption className={"codingLanguage"}>PostgreSQL</figcaption>
          </figure>
          <figure className={"codingLanguage"}>
            <img alt={"Firebase"} className={"codingLanguage"} src={FirebasePic}/>
            <figcaption className={"codingLanguage"}>Firebase</figcaption>
          </figure>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Skills
