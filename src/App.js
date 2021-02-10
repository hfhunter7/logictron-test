import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import CssArticle from './components/CssArticle';
import JsArticle from './components/JsArticle';
import Home from './pages/Home';
import './App.css'

class App extends Component {
  render() {
    return (
      <Router basename="/logictron-test">
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
          <Route path="/js/article/:id">
            <JsArticle />
          </Route>
        </Switch>
      </Router>
    )
  }
}
export default App
