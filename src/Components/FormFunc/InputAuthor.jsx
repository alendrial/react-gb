import React, { useState } from "react";

export const InputAuthor = (props) => {
  return (
    <>
      <input
        className="InputAuthor"
        type="text"
        value={props.value}
        placeholder="Enter author name"
        onChange={props.change}
      />
    </>
  )
}
