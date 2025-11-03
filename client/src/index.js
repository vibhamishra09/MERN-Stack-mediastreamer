import React from 'react'
import { render, hydrate } from 'react-dom'
import App from './App.js'

const rootElement = document.getElementById('root')

if (rootElement && rootElement.hasChildNodes()) {
  hydrate(<App/>, rootElement)
} else if (rootElement) {
  render(<App/>, rootElement)
}


