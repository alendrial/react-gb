import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './InputAuthor.scss'

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
  );
};

InputAuthor.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
