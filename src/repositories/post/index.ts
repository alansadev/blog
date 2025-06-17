import { JsonPostRepository } from './json-post-repository';
import { PostRepostory } from './post-repository';

export const postRepository: PostRepostory = new JsonPostRepository();
