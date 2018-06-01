import React from 'react'
import {connect} from 'react-redux'

class Totals extends React.Component {
  render () {
    return (
      <div>
        <h2>Totals!</h2>
        <p>Calories eaten {this.props.calories}</p>
        <p>Gu gels eaten {this.props.gu}</p>
        <p>ClifBars eaten {this.props.clifbar}</p>
        <p>Power Balls eaten {this.props.balls}</p>
        <p>Peanut Butter and Jelly Sandwiches eaten {this.props.pbj}</p>
        <p>Water drank {this.props.water} ml</p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    calories: state.totals.calories,
    clifbar: state.totals.clifbar,
    gu: state.totals.gu,
    pbj: state.totals.pbj,
    balls: state.totals.balls,
    water: state.totals.water
  }
}

export default connect(mapStateToProps)(Totals)
