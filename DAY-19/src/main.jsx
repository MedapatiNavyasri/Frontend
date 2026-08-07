import React from 'react'
import ReactDOM from 'react-dom/client'
import JsxVariable from './JsxVariable.jsx'
import ReusableComponent from './ReusableComponent.jsx'
import ReusableWithProps from './withProps.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <JsxVariable />
  <ReusableComponent />
  <ReusableWithProps />
  </>
)
