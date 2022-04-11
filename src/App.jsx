import React from "react"
//import "./App.css"
import './App.scss'
import { Form } from "./Components/FormFunc/Form"
// import { Parent } from "./Components/FormFunc/Parent"

export const App = () => {
  return (
    <div className="form" style={{ marginTop: "20px" }}>
      <Form />
      {/* <Parent /> */}
    </div>
  )
}
