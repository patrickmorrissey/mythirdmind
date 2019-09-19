import React from "react"
import Parser from "rss-parser"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cutup from "../components/cutup"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>My Third Mind</h1>
    <Cutup feedURL="http://feeds.bbci.co.uk/news/rss.xml" />
    <Cutup feedURL="https://hnrss.org/frontpage" />
    <Cutup feedURL="https://lexington.craigslist.org/search/mis?format=rss" />
  </Layout>
)

export default IndexPage
