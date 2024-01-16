import Link from 'next/link';
import Logo from '../logo/Logo';
import { Container, Header, Main, PublishBtn } from './Layout.style';

interface Props {
  publish: () => void;
  children: React.ReactNode;
}

function EditorLayout({ publish, children }: Props) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Logo />
        </Link>
        <PublishBtn onClick={publish}>publish</PublishBtn>
      </Header>
      <Main>{children}</Main>
    </Container>
  );
}

export default EditorLayout;
