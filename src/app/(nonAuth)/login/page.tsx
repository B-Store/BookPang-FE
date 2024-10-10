"use client";

import React from "react";
import Image from "next/image";
import logo from "@/../../public/assets/images/logo.svg";
import SignAlert from "@/components/sign/SignAlert";
import SignForm from "@/components/sign/SignForm";

import sign from "../../../../public/assets/images/sign/sign.svg";

const LoginPage = () => {
  const loginBtn = () => {};
  return (
    <div>
      <Image src={logo} alt="logo" />
      <SignForm signFn={loginBtn} selectLabel="로그인" />
    </div>
  );
};

export default LoginPage;
