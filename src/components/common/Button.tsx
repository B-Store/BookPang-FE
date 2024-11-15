import React from "react";
import styles from "@/styles/components/signUpComponent/SignUpForm.module.scss";
import { ResMessage } from "@/types/resType";

//버튼의 기본 타입은 submit이고 type을 따로 지정해주면 다른 기능으로 사용가능
//중복된 값을 확인하는 경우 styles["sign-box-btn__dup"]를 통해 조그마한 버튼으로 디자인
//중복된 값을 확인하지 않는 경우 "btn__big"를 통해 큰 버튼으로 사용
//getFunc을 사용해 버튼 기능 구현
const Button = ({
  label,
  getFunc,
  type = "submit",
}: {
  label?: string;
  getFunc?: Promise<void> | (() => void) | undefined;
  type?: "button" | "submit" | "reset";
}) => {
  const content = label || "중복확인";

  const handleClick = async () => {
    const response = await getFunc;
    return response;
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
