import React from 'react'
import {Route} from 'react-router-dom'

import FuelList from './List/FuelList'
import LiveList from './LiveList/LiveList'
import Lap from './Lap/Lap'
import Splits from './Splits/Splits'
import Totals from './Totals/Totals'

const LiveApp = () => {
  return (
    <div>
      <Route path="/AddFuel/:list" component={FuelList} />
      <Route path="/RemainingFuel" component={LiveList} />
      <Route path="/LapDetails" component={Lap} />
      <Route path="/Totals" component={Totals} />
      <Route path="/Splits" component={Splits} />
    </div>
  )
}

export default LiveApp
