import { useForm, SubmitHandler } from 'react-hook-form';
import { FaUser, FaLock } from 'react-icons/fa6';
import { Button, Container, Form, Input } from './LoginForm.style';

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
      <Container>
        <FaUser color="var(--primary1)" />
        <Input
          {...register('username', { required: true })}
          type="text"
          placeholder="아이디"
        />
      </Container>
      <Container>
        <FaLock color="var(--primary1)" />
        <Input
          {...register('password', { required: true })}
          type="password"
          placeholder="비밀번호"
          required
        />
      </Container>
      {/* <input type="checkbox" /> 로그인 유지 */}
      <Button>로그인하기</Button>
    </Form>
  );
}

export default LoginForm;
