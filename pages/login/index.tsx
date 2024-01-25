import VerticalCenter from '@/components/layout/VerticalCenter';
import Login from '@/components/login/Login';
import Head from 'next/head';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>로그인 - calog</title>
        <meta name="description" content="calog 로그인" />
      </Head>
      <VerticalCenter>
        <Login />
      </VerticalCenter>
    </>
  );
}
