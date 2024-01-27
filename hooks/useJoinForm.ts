import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { joinValidationSchema } from '@/utils/schema';
import { JoinFormInput } from '@/types';
import { InputProps } from '@/components/form/Input';

const useJoinForm = (submitCallbackFn?: () => void) => {
  const {
    formState: { errors, isSubmitting, isLoading },
    register,
    handleSubmit,
  } = useForm<JoinFormInput>({
    mode: 'onSubmit',
    resolver: yupResolver(joinValidationSchema),
  });

  const onSubmit: SubmitHandler<JoinFormInput> = async (data) => {
    // TODO: submit to server
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    if (submitCallbackFn) {
      submitCallbackFn();
    }
  };

  const submitHandler = handleSubmit(onSubmit);

  const inputFields: InputProps<JoinFormInput>[] = [
    {
      name: 'name',
      type: 'text',
      placeholder: '이름',
      required: true,
      theme: 'white',
      register: register,
      message: errors.name?.message,
    },
    {
      name: 'email',
      type: 'text',
      placeholder: '이메일',
      required: true,
      theme: 'white',
      register: register,
      message: errors.email?.message,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: '비밀번호',
      required: true,
      theme: 'white',
      register: register,
      message: errors.password?.message,
    },
    {
      name: 'confirmPassword',
      type: 'password',
      placeholder: '비밀번호 확인',
      required: true,
      theme: 'white',
      register: register,
      message: errors.confirmPassword?.message,
    },
  ];

  return {
    submitHandler,
    isSubmitting,
    isLoading,
    inputFields,
  };
};

export default useJoinForm;
