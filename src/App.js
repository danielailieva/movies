import React from "react"
import "./App.css"
import { Provider } from "react-redux"
import { HashRouter as Router, Route } from 'react-router-dom'

import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

import Landing from './components/home/Landing'

import store from './store'
import Movie from "./components/home/Movie"


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavBar />
            <Route exact path='/' component={Landing} />
            <Route exact path='/movie/:id' component={Movie} />
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
