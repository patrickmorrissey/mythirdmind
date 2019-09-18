import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RSSSource from "../components/rsssource"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>My Third Mind</h1>
    <RSSSource feedURL="http://feeds.bbci.co.uk/news/rss.xml" />
    <RSSSource feedURL="https://hnrss.org/frontpage" />
    <RSSSource feedURL="https://lexington.craigslist.org/search/mis?format=rss" />
  </Layout>
)

export default IndexPage
