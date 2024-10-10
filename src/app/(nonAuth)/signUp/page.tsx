"use client";

import logo from "@/../../public/assets/images/logo.svg";
import Image from "next/image";

import SignForm from "@/components/sign/SignForm";
import React from "react";
import { checkLoginId } from "@/api/sign";

const SignUpPage = () => {
  const signUpBtn = () => {};

  return (
    <div>
      <Image src={logo} alt="logo" />
      <SignForm
        signFn={signUpBtn}
        confirmPassword="confirmPassword"
        confirmPasswordPlaceholder="비밀번호 확인"
        confirmPasswordType="password"
        nickName="nickName"
        nickNamePlaceholder="닉네임 입력"
        phoneNumber="phoneNumber"
        phoneNumberPlaceholder="숫자만 입력해 주세요"
        phoneNumberType="text"
        selectLabel="회원가입"
      />
    </div>
  );
};

export default SignUpPage;