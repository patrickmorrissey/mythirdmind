import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RSSSource from "../components/rsssource"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>My Third Mind</h1>
    <RSSSource />
  </Layout>
)

export default IndexPage
