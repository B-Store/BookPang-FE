import React from "react";

const Button = ({
  label,
  duplicateFn,
  type = "submit",
}: {
  label?: string;
  duplicateFn?: () => void;
  type: "button" | "submit" | "reset";
}) => {
  const content = label || "중복확인";
  return (
    <button onClick={duplicateFn} type={type}>
      {content}
    </button>
  );
};

export default Button;
