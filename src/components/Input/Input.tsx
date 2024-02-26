import React, { FC, HTMLProps } from "react";
import "./styles.css";

interface InputProps extends HTMLProps<HTMLInputElement> {
  id: string;
  label: string;
  type?: string;
}

const Input: FC<InputProps> = ({ id, name, placeholder, label, type = "text", ...rest }) => {
  return (
    <div className="inputcomponent-container">
      <label htmlFor={id} className="inputcomponent-label">
        {label}
      </label>
      <input
        className="input-component"
        name={name}
        id={id}
        placeholder={placeholder}
        type={type}
        {...rest} // przekazywanie dodatkowych właściwości do input
      />
    </div>
  );
}

export default Input;