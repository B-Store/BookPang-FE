"use client";

import SignForm from "@/components/sign/SignForm";
import React from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import {
  getCheckLoginId,
  postSignUp,
  postVerifyPhone,
  postVerifyCode,
} from "@/api/signApi/signUpApi";
import { revalidatePath } from "next/cache";
const SignUpPage = () => {
  const queryClient = useQueryClient();

  const { mutate: signUp } = useMutation({
    mutationFn: postSignUp,
    onSuccess: () => void revalidatePath("/sign-up"),
  });

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
