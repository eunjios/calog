import { useRouter } from 'next/router';
import { FaUser, FaLock } from 'react-icons/fa6';
import Button from '../form/Button';
import Input from '../form/Input';
import useLoginForm from '@/hooks/useLoginForm';

function LoginForm() {
  const router = useRouter();

  // TODO: 로그인 로직
  const { submitHandler, inputFields, isSubmitting } = useLoginForm(() =>
    router.push('/calog')
  );

  return (
    <form onSubmit={submitHandler}>
      <div>
        {inputFields.map((input) => {
          const icon =
            input.name === 'email' ? (
              <FaUser color="var(--primary1)" />
            ) : (
              <FaLock color="var(--primary1)" />
            );
          return <Input key={input.name} icon={icon} {...input} />;
        })}
      </div>
      <div>
        {/* <input type="checkbox" /> 로그인 유지 */}
        <Button disabled={isSubmitting}>로그인하기</Button>
      </div>
    </form>
  );
}

export default LoginForm;
