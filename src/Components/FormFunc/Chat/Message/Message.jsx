import React from 'react';
import PropTypes from "prop-types";

export const Message = (props) => {
  return (
    <>
      <p className="author">{props.message.author}</p>
      <p className="text">{props.message.message}</p>
      <p className="text">{props.message.time}</p>
    </>
  );
};

