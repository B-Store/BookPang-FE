import React from "react";

import Image from "next/image";
import star from "../../../public/assets//images/sign/necessaryStar.svg";
import warning from "../../../public/assets//images/sign/warning.svg";
import type { SignInputType } from "@/types/commonTypes";
import type { RegisterContentType } from "@/types/signTypes";

const SignInput = ({ register, errors, ...props }: SignInputType) => {
  const {
    id,
    password,
    confirmPassword,
    nickName,
    phoneNumber,
    type,
    placeholder,
  } = props;
  const registerContent =
    id || password || confirmPassword || nickName || phoneNumber;

  return (
    <div className="sign-content">
      <label className="sign-content-title" htmlFor="user-input">
        <p>{registerContent}</p>
        <Image src={star} alt="blue star" />
      </label>
      <input
        className="sign-content-input"
        {...register(`${registerContent as RegisterContentType}`, {
          required: true,
        })}
        id="user-input"
        type={type}
        placeholder={placeholder}
      />
      {errors?.message && (
        <p>
          <Image alt="경고" src={warning} />
          <span>{errors.message}</span>
        </p>
      )}
    </div>
  );
};

export default SignInput;
