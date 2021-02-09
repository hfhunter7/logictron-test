import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import CssArticle from './components/CssArticle';
import Home from './pages/Home';
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/css/article/:id">
            <CssArticle />
          </Route>
        </Switch>
      </Router>
    )
  }
}
export default App
