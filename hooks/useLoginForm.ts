import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidationSchema } from '@/utils/schema';
import { LoginFormInput } from '@/types';
import { InputProps } from '@/components/form/Input';

const useLoginForm = (submitCallbackFn?: () => void) => {
  const {
    formState: { errors, isSubmitting, isLoading },
    register,
    handleSubmit,
  } = useForm<LoginFormInput>({
    mode: 'onSubmit',
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    // TODO: submit to server
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    if (submitCallbackFn) {
      submitCallbackFn();
    }
  };

  const submitHandler = handleSubmit(onSubmit);

  const inputFields: InputProps<LoginFormInput>[] = [
    {
      name: 'email',
      type: 'text',
      placeholder: '이메일',
      required: true,
      theme: 'gray',
      register: register,
      message: errors.email?.message,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: '비밀번호',
      required: true,
      theme: 'gray',
      register: register,
      message: errors.password?.message,
    },
  ];

  return {
    submitHandler,
    isSubmitting,
    isLoading,
    inputFields,
  };
};

export default useLoginForm;
