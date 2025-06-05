/* eslint-disable react/prop-types */
import React from "react";
import { ButtonRed, ButtonWhite } from "./styles";

function Button({ children, red, ...props }) {
  return (
    <>
      {red ? (
        <ButtonRed {...props}>{children}</ButtonRed>
      ) : (
        <ButtonWhite {...props}>{children}</ButtonWhite>
      )}
    </>
  );
}
export default Button;
