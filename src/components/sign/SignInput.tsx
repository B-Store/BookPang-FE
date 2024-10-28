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

// 로그인에 필요한 모든 input 모듈화
const SignInput = ({ register, type, errors, ...props }: SignInputType) => {
  const {
    id,
    password,
    confirmPassword,
    nickName,
    phoneNumber,
    placeholder,
    getFunc,
    getRedFunc,
    changePasswordType,
  } = props;
  const registerContent =
    id || password || confirmPassword || nickName || phoneNumber;
  let func;
  getFunc ? (func = getFunc) : (func = getRedFunc);

  return (
    <div className={styles["sign-box"]}>
      <label className={styles["sign-box-title"]} htmlFor="user-input">
        <p>{registerContent}</p>
        <Image src={star} alt="blue star" />
      </label>

      {/* registerContent를 활용해 어떤 input이 들어올지 확인*/}
      <input
        className={styles["sign-box-input"]}
        {...register(registerContent as RegisterContentType, {
          required: true,
        })}
        id="user-input"
        type={type}
        placeholder={placeholder}
      />
      {/* password 또는 confirmPassword를 활용한 비밀번호 확인 기능*/}
      {(password || confirmPassword) && (
        <div className={styles["sign-box__eye"]}>
          {type === "password" ? (
            <Image alt="가리기" src={disableEye} onClick={changePasswordType} />
          ) : (
            <Image alt="보이기" src={ableEye} onClick={changePasswordType} />
          )}
        </div>
      )}
      {/* yup을 사용해 유저의 입력값이 맞았는지 확인*/}
      {errors?.message && (
        <p className={styles["sign-box-error__message"]}>
          <Image alt="경고" src={warning} />
          <span>{errors.message}</span>
        </p>
      )}
      {/* phoneNumber와 id 에서만 검증 기능 필요 */}
      {(phoneNumber || id) && <Button getFunc={func} type="button" />}
    </div>
  );
};

export default SignInput;
