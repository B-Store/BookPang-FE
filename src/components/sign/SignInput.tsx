import React from "react";

import Image from "next/image";
import ableEye from "@/../public/assets/images/sign/ableEye.svg";
import disableEye from "@/../public/assets/images/sign/disableEye.svg";

import styles from "@/styles/components/sign/SignForm.module.scss";
import star from "../../../public/assets//images/sign/necessaryStar.svg";
import warning from "../../../public/assets//images/sign/warning.svg";
import type { SignInputType } from "@/types/commonTypes";
import type { RegisterContentType } from "@/types/signTypes";

import Button from "@/components/common/Button";

const SignInput = ({ register, type, errors, ...props }: SignInputType) => {
  const {
    id,
    password,
    confirmPassword,
    nickName,
    phoneNumber,
    placeholder,
    getFunc,
    changePasswordType,
  } = props;
  const registerContent =
    id || password || confirmPassword || nickName || phoneNumber;

  return (
    <div className={styles["sign-box"]}>
      <label className={styles["sign-box-title"]} htmlFor="user-input">
        <p>{registerContent}</p>
        <Image src={star} alt="blue star" />
      </label>
      <input
        className={styles["sign-box-input"]}
        {...register(registerContent as RegisterContentType, {
          required: true,
        })}
        id="user-input"
        type={type}
        placeholder={placeholder}
      />

      {(password || confirmPassword) && (
        <div className={styles["sign-box__eye"]}>
          {type === "password" ? (
            <Image alt="가리기" src={disableEye} onClick={changePasswordType} />
          ) : (
            <Image alt="보이기" src={ableEye} onClick={changePasswordType} />
          )}
        </div>
      )}

      {errors?.message && (
        <p className={styles["sign-box-error__message"]}>
          <Image alt="경고" src={warning} />
          <span>{errors.message}</span>
        </p>
      )}
      {(phoneNumber || id) && <Button getFunc={getFunc} type="button" />}
    </div>
  );
};

export default SignInput;
