import React, { forwardRef } from "react";

const TextInput = ({ htmlFor, innerref, ...props }) => (
  <label htmlFor={htmlFor}>
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

export default forwardRef((props, ref) => (
  <TextInput innerref={ref} {...props} />
));
