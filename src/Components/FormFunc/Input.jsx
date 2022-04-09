import React, { useState } from "react"

export const Input = (props) => {
  return (
    <>
      <input
        type="text"
        value={props.value}
        placeholder="Enter something..."
        onChange={props.change}
      />
    </>
  )
}
