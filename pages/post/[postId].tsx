import Head from 'next/head';
import PostDetail from '../../components/posts/PostDetail';
import Layout from '@/components/layout/Layout';
import { useRecoilValue } from 'recoil';
import { selectedPostList } from '@/recoil/posts/selectors';
import { useRouter } from 'next/router';

function PostDetailPage() {
  const router = useRouter();
  const posts = useRecoilValue(selectedPostList);
  const id = router.query.postId;
  const post = posts.find((post) => post.id === id);

  if (!post) {
    throw new Error('해당 포스트가 없음');
  }
  const { title, description } = post;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Layout>
        <PostDetail post={post} />
      </Layout>
    </>
  );
}

export default PostDetailPage;
