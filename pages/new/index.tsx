import Head from 'next/head';
import NewPostForm from '@/components/editor/NewPostForm';

export default function NewPage() {
  return (
    <>
      <Head>
        <title>새 기록</title>
        <meta name="description" content="오늘 하루를 기록하는 페이지" />
      </Head>
      <NewPostForm />
    </>
  );
}
