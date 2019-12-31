import React from 'react'
import ReactDOM from 'react-dom'

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}
const title = React.createElement(
  // element to create
  'h1',
  // attributes and-or properties
  {id: 'title', className: 'header', style: style},
  // child elements
  'Hello World'
)

ReactDOM.render(
  // what react elements do we want to render
  title,
  // where should it be rendered
  document.getElementById('root')
)

