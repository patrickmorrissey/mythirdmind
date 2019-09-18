import React from "react"
import Parser from "rss-parser"

let parser = new Parser();

const RSSSource = (props) => (
	<h2>{props.feedURL}</h2>
)

export default RSSSource