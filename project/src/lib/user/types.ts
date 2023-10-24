import { IPost } from '../post/types';

export interface IUser {
  id: number;
  loginId: string;
  password: string;
  nickname: string;
  email?: string;
  posts?: IPost[];
}
