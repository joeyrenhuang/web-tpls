import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './index.stylus'
import App from './App'
import './test'
{ StrictMode } = React
ReactDOM.render pug`
    StrictMode
      App
  `,
  document.getElementById('root')

