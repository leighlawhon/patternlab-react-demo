import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import Routes from './app/routes'

(function() {
    "use strict"
    const app = document.getElementById("root")
    ReactDOM.render(
        <Router history={browserHistory} routes={Routes} />
        ,app)
})()