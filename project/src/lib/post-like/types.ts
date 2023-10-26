import { IPost } from '../post/types';
import { IUser } from '../user/types';

export interface IPostLike {
  id: number;
  like: number;
  postId: number;
  post: IPost;
  users: IUser[];
}
