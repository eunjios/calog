import useJoinForm from '@/hooks/useJoinForm';
import Button from '../form/Button';
import Input from '../form/Input';
import HelperText from '../form/HelperText';

interface Props {
  successCallbackFn: () => void;
}

function JoinForm({ successCallbackFn }: Props) {
  const { submitHandler, inputFields, isSubmitting } =
    useJoinForm(successCallbackFn);

  return (
    <form onSubmit={submitHandler}>
      <div>
        {inputFields.map((input) => (
          <Input key={input.name} {...input} />
        ))}
      </div>
      <HelperText>
        비밀번호 영어 대/소문자, 숫자, 특수문자 포함 8-20자
      </HelperText>
      <Button disabled={isSubmitting}>다음</Button>
    </form>
  );
}

export default JoinForm;
