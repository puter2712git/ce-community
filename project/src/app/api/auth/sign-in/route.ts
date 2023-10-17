import prisma from '@/lib/db';
import { signJwtAccessToken } from '@/lib/jwt';
import * as bcrypt from 'bcrypt';

interface RequestBody {
  loginId: string;
  password: string;
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const user = await prisma.user.findMany({
    where: {
      loginId: body.loginId,
    },
  });

  if (!user.length) {
    throw new Error('아이디 또는 비밀번호가 일치하지 않습니다.');
  }

  const isPasswordMatch = await bcrypt.compare(body.password, user[0].password);

  if (!isPasswordMatch) {
    throw new Error('아이디 또는 비밀번호가 일치하지 않습니다.');
  }

  if (user.length && isPasswordMatch) {
    const { password, ...userWithoutPass } = user[0];

    const accessToken = signJwtAccessToken(userWithoutPass);
    const result = {
      ...userWithoutPass,
      accessToken,
    };

    return Response.json(result);
  }
  return Response.json(null);
}
