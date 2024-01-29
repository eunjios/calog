import LoginForm from './LoginForm';
import Logo from '../logo/Logo';
import Container from '../form/Container';
import Header from '../form/Header';
import Footer from '../form/Footer';

function Login() {
  return (
    <Container>
      <Header>
        <Logo fontSize="36px" />
        <Header.Title>로그인하고 여러분의 기록을 시작해요</Header.Title>
      </Header>
      <LoginForm />
      <Footer>
        <Footer.Text>아직 회원이 아니라면?</Footer.Text>
        <Footer.Link href="/join">회원가입하기</Footer.Link>
      </Footer>
    </Container>
  );
}

export default Login;
