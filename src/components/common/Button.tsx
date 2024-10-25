import React from "react";
import styles from "@/styles/components/sign/SignForm.module.scss";
import { ResMessage } from "@/types/resType";
const Button = ({
  label,
  getFunc,
  type = "submit",
}: {
  label?: string;
  getFunc?: (data: string) => Promise<ResMessage | void>;
  type?: "button" | "submit" | "reset";
}) => {
  const content = label || "중복확인";
  const handleClick = async () => {
    if (getFunc) {
      const response = getFunc;
      return response;
    }
  };
  return (
    <button
      className={
        content === "중복확인" ? styles["sign-box-btn__dup"] : "btn__big"
      }
      onClick={handleClick}
      type={type}
    >
      {content}
    </button>
  );
};

export default Button;
