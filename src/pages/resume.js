import React from "react"
import SEO from "../components/seo"
import {navigate} from 'gatsby';
import "../components/tejas.css"
class IndexPage extends React.Component {

  componentDidMount() {
    window.location = '../Tejas_Mehta_Resume.pdf';
    // navigate('../Tejas_Mehta_Resume.pdf');
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
