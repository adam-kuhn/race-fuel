import React from 'react'
import {Route} from 'react-router-dom'

import HomeBtn from './HomeBtn/HomeBtn'
import FuelList from './List/FuelList'
import LiveList from './LiveList/LiveList'
import Lap from './Lap/Lap'
import Splits from './Splits/Splits'
import Totals from './Totals/Totals'

const LiveApp = () => {
  return (
    <div>
      <Route path="/live/AddFuel/:list" component={FuelList} />
      <Route path="/live/RemainingFuel" component={LiveList} />
      <Route path="/live/LapDetails" component={Lap} />
      <Route path="/live/Totals" component={Totals} />
      <Route path="/live/Splits" component={Splits} />
      <Route path='/live' component={HomeBtn} />
    </div>
  )
}

export default LiveApp
