import React, { useState } from 'react';



export const Button = (props) => {
  return <button onClick={props.click}>{props.name}</button>
}