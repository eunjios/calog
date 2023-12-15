import HorizontalLayout from '@/components/layout/HorizontalLayout';
import Calog from '../../components/posts/Calog';
import { DUMMY_POSTS } from '../../utils';
import Head from 'next/head';

const PostsPage: React.FC = () => {
  return (
    <HorizontalLayout>
      <Head>
        <title>posts</title>
        <meta name="description" content="여러 게시물이 모여있는 페이지" />
      </Head>
      <Calog posts={DUMMY_POSTS} />
    </HorizontalLayout>
  );
};

export default PostsPage;
