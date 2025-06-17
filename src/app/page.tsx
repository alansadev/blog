import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';

import { Suspense } from 'react';
import { PostHeading } from '../components/PostHeading/index';
import { PostCoverImage } from '@/components/PostCoverImage';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <PostCoverImage
          linkProps={{ href: '#' }}
          imageProps={{
            width: 1200,
            height: 720,
            src: '/images/bryen_5.png',
            alt: 'Alt da imagem',
            priority: true,
          }}
        />
        <div className='flex flex-col gap-4 sm:justify-center'>
          <time
            className='text-slate-600 block  text-sm/tight'
            dateTime='2025-04-20'
          >
            20/04/2025 10:00
          </time>
          <PostHeading url='#' as='h2'>
            Lorem ipsum dolor sit
          </PostHeading>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            ut, aliquam iste quae dolorum deserunt aperiam cum veniam. Maxime
            fuga necessitatibus recusandae corrupti possimus molestias sequi hic
            numquam beatae ipsa.
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Footer</p>
      </footer>
    </Container>
  );
}
