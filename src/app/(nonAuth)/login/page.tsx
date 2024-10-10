"use client";

import React from "react";

import SignAlert from "@/components/sign/SignAlert";
import SignForm from "@/components/sign/SignForm";

const LoginPage = () => {
  const loginBtn = () => {};
  return (
    <div className=".pang">
      <SignForm signFn={loginBtn} selectLabel="로그인" />
    </div>
  );
};

export default LoginPage;
