import * as yup from 'yup';

export const joinValidationSchema = yup.object().shape({
  name: yup.string().required('이름은 필수항목이에요'),
  email: yup
    .string()
    .matches(
      /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/,
      '올바른 이메일 형식을 입력하세요'
    )
    .required('이메일은 필수항목이에요'),
  password: yup
    .string()
    .min(8, '8자 이상의 비밀번호를 입력해 주세요')
    .max(20, '20자 이하의 비밀번호를 입력해 주세요')
    .matches(/[a-zA-Z]/, '비밀번호에는 1개 이상의 영어가 포함되어야 해요')
    .matches(/\d/, '비밀번호에는 1개 이상의 숫자가 포함되어야 해요')
    .matches(
      /[!@#$%^&*()_+]/,
      '비밀번호에는 1개 이상의 특수문자가 포함되어야 해요'
    )
    .required('비밀번호는 필수항목이에요'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않아요')
    .required('비밀번호를 다시 입력해 주세요'),
});
