import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import PostDetail from '../../components/posts/PostDetail';
import { DUMMY_POSTS } from '../../utils/data';
import { PostInfo } from '../../types';
import Layout from '@/components/layout/Layout';

interface Props {
  post: PostInfo;
}

const PostDetailPage: React.FC<Props> = ({ post }: Props) => {
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
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: DUMMY_POSTS.map((post) => ({
      params: { postId: post.id.toString() },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const id = ctx.params?.postId;
  const selectedPost = DUMMY_POSTS.find((post) => post.id.toString() === id);

  return {
    props: {
      post: selectedPost,
    },
  };
};

export default PostDetailPage;
