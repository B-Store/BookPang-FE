import * as yup from "yup";

export const schema = yup
  .object()
  .shape({
    id: yup
      .string()
      .required("아이디를 입력해 주세요.")
      .matches(/^[a-zA-Z0-9]*$/, {
        message: "영어, 숫자를 사용해 주세요.",
      })
      .min(6, "길이가 너무 짧습니다.")
      .max(12, "길이가 너무 길어요."),
    password: yup
      .string()
      .required("비밀번호를 입력해 주세요.")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~@#$!%*?&])[a-zA-Z\d~@#$!%*?&]+$/,
        {
          message: "영어, 숫자, 정규식을 사용해 주세요.",
        }
      )
      .min(8, "길이가 너무 짧습니다.")
      .max(15, "길이가 너무 길어요."),
    confirmPassword: yup
      .string()
      .required("비밀번호를 입력해 주세요.")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~@#$!%*?&])[a-zA-Z\d~@#$!%*?&]+$/,
        {
          message: "영어, 숫자, 정규식을 사용해 주세요.",
        }
      )
      .min(8, "길이가 너무 짧습니다.")
      .max(15, "길이가 너무 길어요.")
      .optional(),
    nickName: yup
      .string()
      .required("닉네임을 입력해 주세요.")
      .matches(/^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/, {
        message: "한글, 영어, 숫자를 사용해 주세요.",
      })
      .min(3, "3글자 이상 작성해 주세요.")
      .max(10, "10자 밑으로 작성해 주세요.")
      .optional(),
    phoneNumber: yup
      .string()
      .required("핸드폰 번호를 입력해 주세요.")
      .matches(/^[0-9]*$/, {
        message: "영어, 숫자, 정규식을 사용해 주세요.",
      })
      .optional(),
  })
  .required();
