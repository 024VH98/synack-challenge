import React from "react";

const Select = ({ label, htmlFor, innerref, options, ...props }) => (
  <label htmlFor={htmlFor}>
    {label}
    <select id={htmlFor} name={htmlFor} ref={innerref} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  </label>
);

export default Select;
