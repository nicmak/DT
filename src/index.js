import React from 'react'
import ReactDOM from 'react-dom'
import routes from './routes'
import './Styles/index.css'
import {Router,browserHistory} from 'react-router'
import {Provider} from  'react-redux'
import store from './Store/store.jsx'




let root = document.getElementById('root')

ReactDOM.render(<Provider store={store}>
  <Router history={browserHistory} routes={routes}/>
  </Provider>,root); 

