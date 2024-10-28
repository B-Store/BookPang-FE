"use client";

import SignForm from "@/components/sign/SignForm";
import React from "react";
import { useMutationHook } from "@/hooks/useSignMutationHook";
import { useSignUser } from "@/store/signUpStore";

const SignUpPage = () => {
  //tanstack을 활용한 회원가입 기능
  const { signUp } = useMutationHook();
  //주스탄드에 저장한 아이디 비밀번호 가져오기
  const { id, password, nickName, phoneNumber } = useSignUser();
  //가져온 값 넣어서 적용
  const signUpBtn = () => signUp({ id, password, nickName, phoneNumber });

  return (
    <div className="main-pang">
      {/* {confirmPassword가 있어야만 회원가입인지 알 수 있음} */}
      <SignForm
        signFn={signUpBtn}
        confirmPassword="confirmPassword"
        selectLabel="회원가입"
      />
    </div>
  );
};

export default SignUpPage;
