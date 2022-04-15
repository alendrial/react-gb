import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => {
  return (
    <button onClick={props.click} disabled={props.disabled}>
      {props.name}
    </button>
  );
};


Button.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
}