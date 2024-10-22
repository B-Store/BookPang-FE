"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SignInput from "@/components/sign/SignInput";
import Button from "@/components/common/Button";

import { schema } from "@/lib/userSchema";

import {
  getCheckLoginId,
  postSignUp,
  postVerifyPhone,
  postVerifyCode,
} from "@/api/signApi/signUpApi";
import type { SignFormType, SignFormPropsType } from "@/types/commonTypes";
import type { SignUser } from "@/types/signTypes";

interface UserInfo {
  id: string;
  password: string;
  nickName: string | undefined;
  phoneNumber: string | undefined;
}

const SignForm = ({ signFn, selectLabel, ...props }: SignFormType) => {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [userInfo, setUserInfo] = useState<UserInfo>({
    id: "",
    password: "",
    nickName: undefined,
    phoneNumber: undefined,
  });

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
    setValue,
  } = useForm<SignUser>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const { confirmPassword }: SignFormPropsType = props;

  const { id, password, nickName, phoneNumber } = getValues();
  console.log(id);
  console.log(phoneNumber);
  const changePasswordType = () =>
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");

  const changeConfirmPasswordType = () =>
    confirmPasswordType === "password"
      ? setConfirmPasswordType("text")
      : setConfirmPasswordType("password");

  const idCheckFn = (getId: string) => getCheckLoginId(getId);

  const verifyPhone = (phone: string) => {
    postVerifyPhone(phone);
  };

  return (
    <>
      <form className="pang-form" onSubmit={handleSubmit(signFn)}>
        <h1 className="title">{selectLabel}</h1>
        <SignInput
          register={register}
          id="id"
          getFunc={idCheckFn}
          type="text"
          placeholder="아이디 입력"
          errors={errors.id}
        />

        <SignInput
          register={register}
          type={passwordType}
          password="password"
          placeholder="비밀번호 입력"
          changePasswordType={changePasswordType}
          errors={errors.password}
        />

        {confirmPassword && (
          <>
            <SignInput
              register={register}
              type={confirmPasswordType}
              confirmPassword={confirmPassword}
              placeholder="비밀번호 확인"
              changePasswordType={changeConfirmPasswordType}
              errors={errors.confirmPassword}
            />

            <SignInput
              register={register}
              type="text"
              nickName="nickName"
              placeholder="닉네임 입력"
              errors={errors.nickName}
            />
            <SignInput
              register={register}
              type="text"
              phoneNumber="phoneNumber"
              placeholder="숫자만 입력해 주세요"
              errors={errors.phoneNumber}
            />
          </>
        )}
        <Button label={selectLabel} />
      </form>
    </>
  );
};

export default SignForm;
