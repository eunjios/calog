import Layout from '@/components/layout/Layout';
import Intro from '@/components/main/Intro';
import Head from 'next/head';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>calog</title>
        <meta
          name="description"
          content="calog is a personal blog service that records with a calendar"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Intro />
    </Layout>
  );
}
