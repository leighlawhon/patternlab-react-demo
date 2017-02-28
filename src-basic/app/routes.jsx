import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { PatternLabRoutes } from '@peteyg/patternlab-react' 
import Homepage from './components/pages/Homepage'

const Routes = (
  <Route path="/">  
    {PatternLabRoutes}
    <IndexRoute component={Homepage}/>
  </Route>
)

export default Routes