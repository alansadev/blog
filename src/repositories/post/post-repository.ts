import { PostModel } from '@/models/post/post-model';

export interface PostRepostory {
  findAll(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
}
