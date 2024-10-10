import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SignInput from "@/components/sign/SignInput";
import Button from "@/components/commen/Button";

import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/lib/userSchema";
import ableEye from "@/../public/assets/images/sign/ableEye.svg";

import disableEye from "@/../public/assets/images/sign/disableEye.svg";

import type { SignFormType, SignFormPropsType } from "@/types/commonType";
import type { SignUser } from "@/types/signType";
import Image from "next/image";

const SignForm = ({
  signFn,
  confirmPasswordErrorMessage,
  nickNameErrorMessage,
  phoneNumberErrorMessage,
  selectLabel,
  ...props
}: SignFormType) => {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<SignUser>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const {
    confirmPassword,
    confirmPasswordPlaceholder,
    nickNameType,
    nickName,
    nickNamePlaceholder,
    phoneNumberType,
    phoneNumber,
    phoneNumberPlaceholder,
  }: SignFormPropsType = props;

  const duplicateCheck = () => {};

  const changePasswordType = () =>
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");

  const changeConfirmPasswordType = () =>
    confirmPasswordType === "password"
      ? setConfirmPasswordType("text")
      : setConfirmPasswordType("password");

  return (
    <>
      <form className="pang-form" onSubmit={handleSubmit(signFn)}>
        <h1 className="title">{selectLabel}</h1>
        <SignInput
          register={register}
          id="id"
          type="text"
          placeholder="아이디 입력"
          errors={errors.id}
        />
        <Button duplicateFn={duplicateCheck} type="button" />
        <SignInput
          register={register}
          type="password"
          password="password"
          placeholder="password"
          errors={errors.password}
        />
        <Image alt="보이기" src={ableEye} onClick={changePasswordType} />
        <Image alt="가리기" src={disableEye} onClick={changePasswordType} />
        {confirmPassword && (
          <>
            <SignInput
              register={register}
              type={confirmPasswordType}
              confirmPassword={confirmPassword}
              placeholder={confirmPasswordPlaceholder}
              errors={errors.confirmPassword}
            />
            <Image
              alt="보이기"
              src={ableEye}
              onClick={changeConfirmPasswordType}
            />
            <Image
              alt="가리기"
              src={disableEye}
              onClick={changeConfirmPasswordType}
            />
            <SignInput
              register={register}
              type={nickNameType}
              nickName={nickName}
              placeholder={nickNamePlaceholder}
              errors={errors.nickName}
            />
            <SignInput
              register={register}
              type={phoneNumberType}
              phoneNumber={phoneNumber}
              placeholder={phoneNumberPlaceholder}
              errors={errors.phoneNumber}
            />
          </>
        )}
        <Button type="submit" label={selectLabel} />
      </form>
    </>
  );
};

export default SignForm;
