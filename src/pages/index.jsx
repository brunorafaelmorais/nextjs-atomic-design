import Head from 'next/head';

import Text from '@/shared/components/atoms/Text';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Atomic Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Text>Hello World</Text>
      </main>
    </div>
  );
}
