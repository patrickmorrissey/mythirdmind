import React from "react"
import Parser from "rss-parser"

let parser = new Parser();

export default (props) => (
	<h2>{props.feedURL}</h2>
)
