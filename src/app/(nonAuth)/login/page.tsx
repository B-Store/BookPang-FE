"use client";

import React from "react";
import SignForm from "@/components/signUp/SignUpForm";
import { useSignUser } from "@/store/signUpStore";
import { useMutationHook } from "@/hooks/useSignMutationHook";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const route = useRouter();

  //주스탄드에 저장한 아이디 비밀번호 가져오기
  const { id, password } = useSignUser();
  //tanstack을 활용한 로그인 기능
  const { login } = useMutationHook();
  //가져온 값 넣어서 적용
  const loginBtn = () => login({ id, password });

  return (
    <div>
      <SignForm signFn={loginBtn} selectLabel="로그인" />
      <div onClick={() => route.push("/signUp")}>회원가입</div>
    </div>
  );
};

export default LoginPage;
