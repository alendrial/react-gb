import React, { useState } from 'react';

export const Input = (props) => {
  return (
    <>
      <input
        className="InputText"
        type="text"
        value={props.message}
        placeholder="Enter something..."
        onChange={props.change}
        style={{ marginRight: '20px' }}
      />
    </>
  );
};
