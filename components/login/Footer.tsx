/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import { container, emp, base, text } from './Footer.style';

function LoginFooter() {
  return (
    <div css={container}>
      <span css={[text, base]}>아직 회원이 아니라면?</span>
      <Link href={'/join'} css={[text, emp]}>
        회원가입하기
      </Link>
    </div>
  );
}

export default LoginFooter;
