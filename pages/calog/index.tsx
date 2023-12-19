import HorizontalLayout from '@/components/layout/HorizontalLayout';
import Calog from '../../components/posts/Calog';
import { DUMMY_POSTS } from '../../utils/data';
import Head from 'next/head';

function PostsPage() {
  return (
    <>
      <Head>
        <title>calog</title>
        <meta
          name="description"
          content="calog는 캘린더와 함께 하루를 기록합니다."
        />
      </Head>
      <HorizontalLayout>
        <Calog posts={DUMMY_POSTS} />
      </HorizontalLayout>
    </>
  );
}

export default PostsPage;
