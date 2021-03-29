import React from "react";

const TextInput = ({ htmlFor, innerref, label = "", ...props }) => (
  <label htmlFor={htmlFor}>
    {label}
    <input
      type="text"
      id={htmlFor}
      name={htmlFor}
      ref={innerref}
      autoComplete="off"
      {...props}
    />
  </label>
);

export default TextInput;
