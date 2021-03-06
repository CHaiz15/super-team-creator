import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App/App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import rootReducer from './Reducers/index'

const store = createStore(rootReducer, composeWithDevTools())

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'))

serviceWorker.unregister()
