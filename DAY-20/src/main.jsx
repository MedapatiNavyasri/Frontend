import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, App1, App2 } from "./App.jsx"
import App3 from "./table.jsx"
import App4 from "./fragment.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <App1 />
    <App2 />
    <App3 />
    <App4 />
  </>,
)
