"use client";

import React from "react";

import SignAlert from "@/components/sign/SignAlert";
import SignForm from "@/components/sign/SignForm";
import { postLogin } from "@/api/signApi/loginApi";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { revalidatePath } from "next/cache";

const LoginPage = () => {
  const queryClient = useQueryClient();
  const { mutate: login } = useMutation({
    mutationFn: postLogin,
    onSuccess: () => void revalidatePath("/login"),
  });

  const loginBtn = () => {};

  return (
    <div className="main-pang">
      <SignForm signFn={loginBtn} selectLabel="로그인" />
    </div>
  );
};

export default LoginPage;
