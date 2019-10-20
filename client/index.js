import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'

import reducers from './reducers'
import App from './components/App'

let store = createStore(reducers, compose(applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f))

let persistor = persistStore(store)
// persistor.purge()

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    document.getElementById('app')
  )
})
