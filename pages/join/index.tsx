import Join from '@/components/join/Join';
import VerticalCenter from '@/components/layout/VerticalCenter';
import Head from 'next/head';

export default function JoinPage() {
  return (
    <>
      <Head>
        <title>회원가입 - calog</title>
        <meta name="description" content="calog 회원가입" />
      </Head>
      <VerticalCenter>
        <Join />
      </VerticalCenter>
    </>
  );
}
