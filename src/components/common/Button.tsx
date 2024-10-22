import React from "react";
import styles from "@/styles/components/sign/SignForm.module.scss";
import { ResMessage } from "@/types/resType";
const Button = ({
  label,
  getFunc,
  func,
  type = "submit",
}: {
  label?: string;
  getFunc: (data: string) => Promise<ResMessage>;
  func?: () => void;
  type?: "button" | "submit" | "reset";
}) => {
  const content = label || "중복확인";
  const id = "keumm9612";

  return (
    <button
      className={
        content === "중복확인" ? styles["sign-box-btn__dup"] : "btn__big"
      }
      onClick={() => getFunc(id)}
      type={type}
    >
      {content}
    </button>
  );
};

export default Button;
