import React from 'react'
import ReactDOM from 'react-dom'
import './jsex'
import './css'
import App from './App'
{ StrictMode } = React
ReactDOM.render pug`
    StrictMode
      App
  `,
  document.getElementById('root')

