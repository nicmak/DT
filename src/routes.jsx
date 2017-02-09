import {Route, IndexRoute} from 'react-router'
import App from './Components/App'
import React from 'react'
import Main from './Components/Main'
import Document from './Components/Documents/Document'



export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path='documents'component={Document}/>

  </Route>
)