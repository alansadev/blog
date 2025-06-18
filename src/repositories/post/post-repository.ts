import { PostModel } from '@/models/post/post-model';

export interface PostRepostory {
  findAllPublic(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
}
