import React from 'react'
import ReactDOM from 'react-dom'

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}
/*  refactored to use JSX */

ReactDOM.render(
  <div style={style}>
    <h1 id="heading-element">Hello World</h1>
    <p>We're glad you're here!</p>
  </div>,
  // where should it be rendered
  document.getElementById('root')
)


/* Original Create React Element
const title = React.createElement(
  // element to create
  'ul',
  // attributes or properties
  {id: 'title', className: 'header', style: style},
  // child elements
  React.createElement(
    'li',
    {},
    'item on our list'
  )
)
*/
