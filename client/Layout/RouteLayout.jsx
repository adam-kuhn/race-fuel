import React from 'react'
import {Route, Switch} from 'react-router-dom'

import HomeBtn from '../components/LiveApp/HomeBtn/HomeBtn'
import FuelList from '../components/LiveApp/List/FuelList'
import LiveList from '../components/LiveApp/LiveList/LiveList'
import Lap from '../components/LiveApp/Lap/Lap'
import Splits from '../components/LiveApp/Splits/Splits'
import Totals from '../components/LiveApp/Totals/Totals'
import Nav from '../components/LiveApp/Nav/Nav'
import Login from '../components/Auth/Login/Login'
import Register from '../components/Auth/Register/Register'
import LandingPage from '../components/LandingPage/LandingPage'

const RouteLayout = () => {
  return (
    <div className='main-container'>
      <Route exact path="/" component={LandingPage} />
      <Switch>
        <Route path="/:username/live/AddFuel/:list" component={FuelList} />
        <Route path="/:username/live" component={Nav} />
      </Switch>
      <Route path="/:username/live/RemainingFuel" component={LiveList} />
      <Route path="/:username/live/LapDetails" component={Lap} />
      <Route path="/:username/live/Totals" component={Totals} />
      <Route path="/:username/live/Splits" component={Splits} />
      <Route path='/:username/live' component={HomeBtn} />
      <Route path='/auth/login' component={Login} />
      <Route path='/auth/register' component={Register} />
    </div>
  )
}

export default RouteLayout
