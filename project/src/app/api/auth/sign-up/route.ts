import prisma from '@/lib/db';
import { IUser } from '@/lib/user/types';
import * as bcrypt from 'bcrypt';

export async function POST(req: Request) {
  const body: Omit<IUser, 'id' | 'posts'> = await req.json();
  const hashedPassword = await bcrypt.hash(body.password, 10);

  const user = await prisma.user.create({
    data: {
      nickname: body.nickname,
      loginId: body.loginId,
      password: hashedPassword,
      email: body.email,
    },
  });

  return Response.json(user);
}
