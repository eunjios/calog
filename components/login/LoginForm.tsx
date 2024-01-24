import { useForm, SubmitHandler } from 'react-hook-form';
import { FaUser, FaLock } from 'react-icons/fa6';
import { Button, Form } from './LoginForm.style';
import MainInput from '../ui/input/MainInput';

interface FormInput {
  username: string;
  password: string;
}

function LoginForm() {
  // TODO: 로그인 로직
  const { register, handleSubmit } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <MainInput
        icon={<FaUser color="var(--primary1)" />}
        name="username"
        type="text"
        placeholder="아이디"
        register={register}
        required
      />
      <MainInput
        icon={<FaLock color="var(--primary1)" />}
        name="password"
        type="password"
        placeholder="비밀번호"
        register={register}
        required
      />
      {/* <input type="checkbox" /> 로그인 유지 */}
      <Button>로그인하기</Button>
    </Form>
  );
}

export default LoginForm;
