import { ErrorMessage } from "formik";
import React, { InputHTMLAttributes } from "react";

import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  cpf?: boolean;
  txtbox?: boolean;
}

const Input: React.FC<InputProps> = ({ label, name, cpf, txtbox, ...rest }) => {
  return (
    <div className="input-block">
      {label && <label htmlFor={name}>{label}</label>}
      <input type="text" id={name} {...rest} />
    </div>
  );
};

export default Input;
