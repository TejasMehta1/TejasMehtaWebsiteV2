import React from "react"
import SEO from "../components/seo"
import {navigate} from 'gatsby';
import "../components/tejas.css"
class PlayStore extends React.Component {

  componentDidMount() {
    window.location = 'https://play.google.com/store/apps/developer?id=TejasMehta';
  }

  render(){
    return (
      // <CADLayout>
      <React.Fragment>
        <SEO title="Play Store Apps" />
      </React.Fragment>
    )

  }

}
export default PlayStore
