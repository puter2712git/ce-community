import { IPostLike } from '../post-like/types';
import { IUser } from '../user/types';

export interface IPost {
  id: number;
  title: string;
  content: string;
  date: string;
  authorId: number;
  author: IUser;
  like: IPostLike;
}
