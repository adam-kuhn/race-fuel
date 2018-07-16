import React from 'react'

import LiveList from './LiveList/LiveList'
import Lap from './Lap/Lap'
import Totals from './Totals/Totals'
import GoToSplits from './GoToSplits/GoToSplits'

const Main = () => {
  return (
    <div>
      <LiveList />
      <Lap />
      <Totals />
      <GoToSplits />
    </div>
  )
}

export default Main
