import Confetti from '../confetti/Confetti';
import LoginForm from '../login/LoginForm';
import Header from '../form/Header';

function Success() {
  return (
    <div>
      <Confetti />
      <Header>
        <Header.Title>회원가입을 축하합니다!</Header.Title>
        <Header.Text>로그인하고 여러분의 하루를 기록해 보세요</Header.Text>
      </Header>
      <LoginForm />
    </div>
  );
}

export default Success;
