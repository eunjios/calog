/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { smallBtn } from '@/styles/button';
import Link from 'next/link';

function NewPost() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: end;
        width: 100%;
        padding-right: 24px;
        text-align: right;
      `}
    >
      <Link css={[smallBtn]} href="/new">
        글쓰기
      </Link>
    </div>
  );
}

export default NewPost;
