import prisma from '@/lib/db';
import * as bcrypt from 'bcrypt';

interface RequestBody {
  nickname: string;
  loginId: string;
  password: string;
  email: string;
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
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
