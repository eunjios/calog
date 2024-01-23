/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import { container, emp, text } from './Footer.style';

function LoginFooter() {
  return (
    <div css={container}>
      <Link href={'/join'} css={[text, emp]}>
        회원가입하기
      </Link>
    </div>
  );
}

export default LoginFooter;
