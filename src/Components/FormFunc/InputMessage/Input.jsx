import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Input.scss'

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

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
};
