import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { PatternLabRoutes } from '@peteyg/patternlab-react' 
import Layout from './components/layouts/Layout'

import HomepagePage from './components/pages/HomepagePage'
import AboutPage from './components/pages/AboutPage'
import LoginPage from './components/pages/LoginPage'
import DashboardPage from './components/pages/DashboardPage'

import BlogIndex from './components/templates/BlogIndex'
import Detail from './components/templates/Detail'
import Form from './components/templates/Form'

const Routes = (
  <Route path="/">  
    {PatternLabRoutes}
    <Route component={Layout}>
      <IndexRoute component={HomepagePage}/>
      <Route path="about" component={AboutPage} />
      <Route path="blog-index" component={BlogIndex} />
      <Route path="blog-detail" component={Detail} />
      <Route path="contact" component={Form} />
      <Route path="login" component={LoginPage} />
      <Route path="dashboard" component={DashboardPage} />      
    </Route>
  </Route>
)

export default Routes