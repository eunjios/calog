// import Layout from '@/components/layout/Layout';
import Login from '@/components/login/Login';
import Head from 'next/head';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>로그인</title>
        <meta name="description" content="calog 로그인" />
      </Head>
      <Login />
    </>
  );
}
