import { useQueryClient, useMutation } from "@tanstack/react-query";
import { postLogin } from "@/api/signApi/loginApi";
import { revalidatePath } from "next/cache";
import { postSignUp } from "@/api/signApi/signUpApi";

export const useMutationHook = () => {
  const { mutate: login } = useMutation({
    mutationFn: postLogin,
    onSuccess: () => void revalidatePath("/login"),
  });

  const { mutate: signUp } = useMutation({
    mutationFn: postSignUp,
    onSuccess: () => void revalidatePath("/sign-up"),
  });

  return { login, signUp };
};
