import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { PatternLabRoutes } from '@peteyg/patternlab-react' 
import Layout from './components/layouts/Layout'
import Homepage from './components/pages/HomepagePage'

const Routes = (
  <Route path="/">  
    {PatternLabRoutes}
    <Route component={Layout}>
      <IndexRoute component={Homepage}/>
    </Route>
  </Route>
)

export default Routes