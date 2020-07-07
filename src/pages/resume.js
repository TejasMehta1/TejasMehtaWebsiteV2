import React from "react"
import SEO from "../components/seo"
import {navigate} from 'gatsby';
import ResumePDF from "../images/TejasMehtaResume.pdf"
import "../components/tejas.css"
class IndexPage extends React.Component {

  componentDidMount() {
    window.location = 'TejasMehtaResume.pdf';
    // navigate('../TejasMehtaResume.pdf');
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
