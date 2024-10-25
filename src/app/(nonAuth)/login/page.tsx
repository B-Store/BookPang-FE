"use client";

import React from "react";
import SignForm from "@/components/sign/SignForm";
import { useSignUser } from "@/store/signUpStore";
import { useMutationHook } from "@/hooks/useSignMutationHook";

const LoginPage = () => {
  const { id, password } = useSignUser();
  const { login } = useMutationHook();

  const loginBtn = () => login({ id, password });

  return (
    <div className="main-pang">
      <SignForm signFn={loginBtn} selectLabel="로그인" />
    </div>
  );
};

export default LoginPage;
