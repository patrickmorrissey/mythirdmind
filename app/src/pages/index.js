import React from "react"
import Parser from "rss-parser"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cutup from "../components/cutup"

// Note: some RSS feeds can't be loaded in the browser due to CORS security.
// To get around this, you can use a proxy.
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

let parser = new Parser();

const rssSources = [
  "http://feeds.bbci.co.uk/news/rss.xml",
  "https://hnrss.org/frontpage",
  "https://lexington.craigslist.org/search/mis?format=rss"
]

rssSources.forEach(function(index, el) {
  (async () => {
 
    let feed = await parser.parseURL(CORS_PROXY + index);
    console.log(feed.title);
   
    feed.items.forEach(item => {
      console.log(item.title + ':' + item.link)
    });
   
  })();
});

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>My Third Mind</h1>
    <Cutup feedURL={rssSources[0]} />
    <Cutup feedURL={rssSources[1]} />
    <Cutup feedURL={rssSources[2]} />
  </Layout>
)

export default IndexPage
