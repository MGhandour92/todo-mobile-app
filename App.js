import React from "react";
import { AppRegistry } from 'react-native'

// Import the App container component

// *********** State Storage
// import AppState from './AppState'
// const AppWithStore = () => <AppState />
// *********************************

//// ********* Redux Storage
//// - Import the reducer and create a store
import AppRedux from './AppRedux'
import { reducer } from './Components/reduxStorage'
import { createStore } from 'redux'

const store = createStore(reducer)
// // - Pass the store into the app container
const AppWithStore = () => <AppRedux store={store} />

// *********************************

export default App = AppWithStore
AppRegistry.registerComponent('App', () => AppWithStore)