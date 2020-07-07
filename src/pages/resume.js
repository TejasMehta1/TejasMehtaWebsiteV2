import React from "react"
import SEO from "../components/seo"
import {navigate} from 'gatsby';
import ResumePDF from "../images/TejasMehtaResume.pdf"
import "./tejas.css"
class IndexPage extends React.Component {

  componentDidMount() {
    window.location = ResumePDF;
    navigate(ResumePDF);
  }

  render(){
    return (
      // <CADLayout>
      <React.Fragment>
        <SEO title="Resume" />
      </React.Fragment>
    )

  }

}
export default IndexPage
