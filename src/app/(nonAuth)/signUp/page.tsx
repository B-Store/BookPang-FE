"use client";

import SignForm from "@/components/sign/SignForm";
import React from "react";
import { useMutation } from "@tanstack/react-query";

const SignUpPage = () => {
  // const { mutate: signUp } = useMutation({ mutationFn: postSignUp });

  const signUpBtn = async () => {};
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
