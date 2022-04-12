import React, { useState } from "react";

export const InputAuthor = (props) => {
  return (
    <>
      <input
        className="InputAuthor"
        type="text"
        value={props.author}
        placeholder="Username"
        onChange={props.change}
      />
    </>
  )
}