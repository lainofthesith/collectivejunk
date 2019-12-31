import React from 'react'
import ReactDOM from 'react-dom'


let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}
class SkiDayCounter extends React.Component {
  render() {
    console.log(this.props)
    return (
      <section>
        <h1>Ski Days</h1>
        <div>
          <p>Total Days: {this.props.total}</p>
        </div>
        <div>
          <p>Powder Days: {this.props.powder}</p>
        </div>
        <div>
          <p>Backcountry Days: {this.props.backcountry}</p>
        </div>
        <div>
          <p>Goal Days: {this.props.goal}</p>
        </div>
      </section>
    )
  }
}

ReactDOM.render(
  <SkiDayCounter
    total = {skiData.total}
    powder = {skiData.powder}
    backcountry = {skiData.backcountry}
    goal = {skiData.goal}

    />,
  // where should it be rendered
  document.getElementById('root')
)

