"use client";

import SignForm from "@/components/sign/SignForm";
import React from "react";
import { useMutationHook } from "@/hooks/useSignMutationHook";
import { useSignUser } from "@/store/signUpStore";

const SignUpPage = () => {
  const { signUp } = useMutationHook();
  const { id, password, nickName, phoneNumber } = useSignUser();

  const signUpBtn = async () => signUp({ id, password, nickName, phoneNumber });

  return (
    <div className="main-pang">
      <SignForm
        signFn={signUpBtn}
        confirmPassword="confirmPassword"
        selectLabel="회원가입"
      />
    </div>
  );
};

export default SignUpPage;
