"use client";
import SignUpConsent from "@/components/signUp/SignUpConsent";
import SignUpForm from "@/components/signUp/SignUpForm";
import { useMutationHook } from "@/hooks/useSignMutationHook";
import { useSignUser } from "@/store/signUpStore";
import { useState } from "react";

const SignUpPage = () => {
  const [isConsent, setIsConsent] = useState(false);

  //tanstack을 활용한 회원가입 기능
  const { signUp } = useMutationHook();
  //주스탄드에 저장한 아이디 비밀번호 가져오기
  const { id, password, nickName, phoneNumber } = useSignUser();
  //가져온 값 넣어서 적용
  const signUpBtn = () => signUp({ id, password, nickName, phoneNumber });

  return (
    <div className="main-pang">
      {/* {confirmPassword가 있어야만 회원가입인지 알 수 있음} */}
      <p>회원가입</p>
      {isConsent ? (
        <SignUpForm
          signFn={signUpBtn}
          confirmPassword="confirmPassword"
          selectLabel="회원가입"
        />
      ) : (
        <SignUpConsent setIsConsent={setIsConsent} />
      )}
    </div>
  );
};

export default SignUpPage;
