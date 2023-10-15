import prisma from '@/lib/db';
import { signJwtAccessToken } from '@/lib/jwt';
import * as bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

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
    return NextResponse.json({
      status: 401,
    });
  }

  const isPasswordMatch = await bcrypt.compare(body.password, user[0].password);

  if (!isPasswordMatch) {
    return NextResponse.json({
      status: 401,
    });
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
