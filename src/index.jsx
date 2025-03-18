import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { App } from '../src/app.jsx'

const root = document.getElementById('root')
if (root != null) {
  const reactRoot = ReactDOM.createRoot(root)
  reactRoot.render(<App />)
}
