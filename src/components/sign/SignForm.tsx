"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SignInput from "@/components/sign/SignInput";
import Button from "@/components/common/Button";

import { useMutationHook } from "@/hooks/useSignMutationHook";
import { schema } from "@/lib/userSchema";
import { useSignUser } from "@/store/signUpStore";
import { getCheckLoginId } from "@/api/signApi/signUpApi";

import type { SignFormType, SignFormPropsType } from "@/types/commonTypes";
import type { SignUserType } from "@/types/signTypes";

const SignForm = ({ signFn, selectLabel, ...props }: SignFormType) => {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const { verifyPhone, verifyCode } = useMutationHook();

  const { setSignUserData } = useSignUser();

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
    setValue,
  } = useForm<SignUserType>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const { id, password, nickName, phoneNumber } = getValues();

  //유저가 입력한 값을 최신화 시켜주기 위한 코드
  useEffect(() => {
    setSignUserData({ id, password, nickName, phoneNumber });
  }, [id, password, nickName, phoneNumber, setSignUserData]);

  const { confirmPassword }: SignFormPropsType = props;
  //눈 클릭 시 입력한 비밀번호 보임
  const changePasswordType = () =>
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  //눈 클릭 시 입력한 비밀번호 보임
  const changeConfirmPasswordType = () =>
    confirmPasswordType === "password"
      ? setConfirmPasswordType("text")
      : setConfirmPasswordType("password");

  const idCheckFn = (getId: string) => getCheckLoginId(getId);

  const verifyPhoneBtn = (phone: string) => verifyPhone(phone);

  return (
    <>
      <form className="pang-form" onSubmit={handleSubmit(signFn)}>
        <h1 className="title">{selectLabel}</h1>
        <SignInput
          register={register}
          id="id"
          getRedFunc={() => idCheckFn(id)}
          type="text"
          placeholder="아이디 입력"
          errors={errors.id}
        />

        <SignInput
          register={register}
          type={passwordType}
          password="password"
          placeholder="비밀번호 입력"
          changePasswordType={changePasswordType}
          errors={errors.password}
        />

        {confirmPassword && (
          <>
            <SignInput
              register={register}
              type={confirmPasswordType}
              confirmPassword={confirmPassword}
              placeholder="비밀번호 확인"
              changePasswordType={changeConfirmPasswordType}
              errors={errors.confirmPassword}
            />

            <SignInput
              register={register}
              type="text"
              nickName="nickName"
              placeholder="닉네임 입력"
              errors={errors.nickName}
            />
            <SignInput
              register={register}
              type="text"
              getFunc={
                phoneNumber
                  ? () => verifyPhoneBtn(phoneNumber)
                  : Promise.resolve()
              }
              phoneNumber="phoneNumber"
              placeholder="숫자만 입력해 주세요"
              errors={errors.phoneNumber}
            />
          </>
        )}
        <Button label={selectLabel} />
      </form>
    </>
  );
};

export default SignForm;
