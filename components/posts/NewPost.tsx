/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { smallBtn } from '@/styles/button';
import Link from 'next/link';

function NewPost() {
  return (
    <div
      css={css`
        width: 100%;
        padding-right: 24px;
        margin-bottom: 16px;
        text-align: right;
      `}
    >
      <Link css={[smallBtn]} href="/new">
        기록하기
      </Link>
    </div>
  );
}

export default NewPost;
