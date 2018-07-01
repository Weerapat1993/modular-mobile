import React from 'react'
import { Provider } from 'react-redux'
import { Routes } from './routes'
import configureStore from './config/store'

const App = () => (
  <Provider store={configureStore()}>
    <Routes />
  </Provider>
)

// console.disableYellowBox = true

export default App