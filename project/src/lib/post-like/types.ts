import { IPost } from '../post/types';

export interface IPostLike {
  id: number;
  like: number;
  dislike: number;
  postId: number;
  post: IPost;
}
