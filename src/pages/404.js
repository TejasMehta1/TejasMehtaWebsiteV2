import React from "react"
import { navigate } from "gatsby"
import LeanHeader from "../components/leanheader"
import SEO from "../components/seo"
import "../components/tejas.css"

const NotFoundPage = () => (
  <React.Fragment>
  <LeanHeader/>
    <SEO title="404: Not found" />
    <div style={{position: "relative", paddingTop: "20vh", height: "100vh", textAlign: "center", color: "white", backgroundColor: "black"}}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist. Happens to the best of us.</p>
      <button onClick={() => navigate("/")} className={"ripple buttonWhite"}>Return Home</button>
    </div>
  </React.Fragment>
)

export default NotFoundPage
