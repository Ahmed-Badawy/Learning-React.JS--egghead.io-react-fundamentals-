import React from 	'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from 	'./modules/App'
import About from 	'./modules/About'
import Repo from 	'./modules/Repo'
import Repos from 	'./modules/Repos'

render((
  <Router history={hashHistory}>
    <Route path="/home" component={App}>
      {/* make them children of `App` */}
      <Route path="/home" component={App}/>
      <Route path="/repos" component={Repos}/>
      <Route path="/repos/:param1/:param2" component={Repo}/>      
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))

