import React from 'react'
import ReactDOM from 'react-dom'

class Message extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Everyone</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Message />,
  // where should it be rendered
  document.getElementById('root')
)

