import { useState } from 'react';
import JoinForm from './JoinForm';
import Success from './Success';
import Container from '../form/Container';
import Header from '../form/Header';
import Footer from '../form/Footer';

function Join() {
  const [isSuccess, setIsSuccess] = useState(false);

  const joinSuccess = () => {
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <Container>
        <Success />
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Header.Title>
          회원가입을 하고 모든 서비스를 무료로 이용하세요
        </Header.Title>
      </Header>
      <JoinForm successCallbackFn={joinSuccess} />
      <Footer>
        <Footer.Text>이미 회원이신가요?</Footer.Text>
        <Footer.Link href="/login">로그인하기</Footer.Link>
      </Footer>
    </Container>
  );
}

export default Join;
