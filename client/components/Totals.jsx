import React from 'react'
import {connect} from 'react-redux'

class Totals extends React.Component {
  render () {
    return (
      <div>
        <h2>Totals!</h2>
        <p>Calories eaten {this.props.calories}</p>
        <p>Water drunk {this.props.water}</p>
        <p>ClifBars eaten {this.props.clifbar}</p>
        <p>Gu gels eaten {this.props.gu}</p>
        <p>Peanut Butter and Jelly Sandwiches eaten {this.props.pbj}</p>
        <p>Power Balls eaten {this.props.balls}</p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    calories: state.fuelList.calories,
    water: state.totals.water,
    clifbar: state.totals.clifbar,
    gu: state.totals.gu,
    pbj: state.totals.pbj,
    balls: state.totals.balls
  }
}

export default connect(mapStateToProps)(Totals)
