import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';
import { findAllPublicPostsCached } from '@/lib/post/queries';

export async function PostsList() {
  const posts = await findAllPublicPostsCached();
  return (
    <div className='grid grid-cols-1 mb-16 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {posts.slice(1).map(post => {
        const postLink = `/post/${post.slug}`;
        return (
          <div className='flex flex-col group gap-4' key={post.id}>
            <PostCoverImage
              linkProps={{ href: postLink }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
                priority: true,
              }}
            />
            <PostSummary
              createdAt={post.createdAt}
              title={post.title}
              excerpt={post.excerpt}
              postLink={postLink}
              postHeading='h2'
            />
          </div>
        );
      })}
    </div>
  );
}
