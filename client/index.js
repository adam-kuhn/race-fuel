import React from 'react'
import {render} from 'react-dom'
// import {HashRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'

import reducers from './reducers'
import App from './components/App'

let store = createStore(reducers, compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

let persistor = persistStore(store)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      {/* <Router> */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      {/* </Router> */}
    </Provider>,
    document.getElementById('app')
  )
})
