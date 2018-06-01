import React from 'react'
import {connect} from 'react-redux'

class LiveList extends React.Component {
  render () {
    return (
      <ul>
        <li>Gu {this.props.gu}</li>
        <li>ClifBar {this.props.clifbar}</li>
        <li>Power Balls {this.props.balls}</li>
        <li>Peanut Butter Jelly {this.props.pbj}</li>
        <li>Water {this.props.water}</li>
      </ul>
    )
  }
}

function mapStateToProps (state) {
  return {
    gu: state.fuelList.gu,
    clifbar: state.fuelList.clifbar,
    balls: state.fuelList.balls,
    pbj: state.fuelList.pbj,
    water: state.fuelList.water
  }
}
export default connect(mapStateToProps)(LiveList)
