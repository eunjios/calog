import LoginForm from './LoginForm';
import LoginFooter from './Footer';
import Logo from '../logo/Logo';
import { Border, Container, Title } from './Login.style';

function Login() {
  return (
    <Container>
      <Border>
        <Logo fontSize="36px" />
        <Title>로그인하고 여러분의 기록을 시작해요</Title>
        <LoginForm />
        <LoginFooter />
        {/* <div style={{ cursor: 'pointer', height: '80px' }}></div> */}
      </Border>
    </Container>
  );
}

export default Login;
