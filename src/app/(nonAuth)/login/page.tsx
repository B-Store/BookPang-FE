"use client";

import React from "react";

import SignAlert from "@/components/sign/SignAlert";
import SignForm from "@/components/sign/SignForm";
import { postLogin } from "@/api/signApi/loginApi";
import { useMutation } from "@tanstack/react-query";

const LoginPage = () => {
  const { mutate: login } = useMutation({ mutationFn: postLogin });

  const loginBtn = () => {
    login({ loginId: "string;", password: "string;" });
  };

  return (
    <div className="main-pang">
      <SignForm signFn={loginBtn} selectLabel="로그인" />
    </div>
  );
};

export default LoginPage;
