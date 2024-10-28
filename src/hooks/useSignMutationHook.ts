import { useQueryClient, useMutation } from "@tanstack/react-query";
import { postLogin } from "@/api/signApi/loginApi";

import {
  postSignUp,
  postVerifyPhone,
  postVerifyCode,
} from "@/api/signApi/signUpApi";

//로그인, 회원가입, 핸드폰번호, 핸드폰번호 검증 후 코드를 받기 위한 mutation 훅
export const useMutationHook = () => {
  const queryClient = useQueryClient();

  const { mutate: login } = useMutation({
    mutationFn: postLogin,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["login"] }),
  });

  const { mutate: signUp } = useMutation({
    mutationFn: postSignUp,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["signUp"] }),
  });

  const { mutate: verifyPhone } = useMutation({
    mutationFn: postVerifyPhone,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["verifyPhone"] }),
  });

  const { mutate: verifyCode } = useMutation({
    mutationFn: postVerifyCode,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["verifyCode"] }),
  });

  return { login, signUp, verifyPhone, verifyCode };
};
