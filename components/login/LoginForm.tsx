import { useForm, SubmitHandler } from 'react-hook-form';
import { FaUser, FaLock } from 'react-icons/fa6';
import Button from '../form/Button';
import Input from '../form/Input';

interface FormInput {
  username: string;
  password: string;
}

function LoginForm() {
  // TODO: 로그인 로직
  const { register, handleSubmit } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          icon={<FaUser color="var(--primary1)" />}
          name="username"
          type="text"
          placeholder="아이디"
          register={register}
          required
        />
        <Input
          icon={<FaLock color="var(--primary1)" />}
          name="password"
          type="password"
          placeholder="비밀번호"
          register={register}
          required
        />
      </div>
      <div>
        {/* <input type="checkbox" /> 로그인 유지 */}
        <Button>로그인하기</Button>
      </div>
    </form>
  );
}

export default LoginForm;
