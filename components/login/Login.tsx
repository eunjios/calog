import LoginForm from './LoginForm';
import LoginFooter from './Footer';
import Logo from '../logo/Logo';
import { Container, Title } from './Login.style';

function Login() {
  return (
    <Container>
      <Logo fontSize="36px" />
      <Title>로그인하고 여러분의 기록을 시작해요</Title>
      <LoginForm />
      <LoginFooter />
    </Container>
  );
}

export default Login;
