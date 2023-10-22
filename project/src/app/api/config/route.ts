import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import * as bcrypt from 'bcrypt';
import { NextApiResponse } from 'next';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const user = await prisma.user.findUnique({
    where: {
      loginId: body.loginId,
    },
  });

  const isPasswordMatch = await bcrypt.compare(body.password, user!.password);

  if (!isPasswordMatch) {
    return NextResponse.json({
      status: 500,
      message: '비밀번호가 일치하지 않습니다.',
    });
  }

  const newUser = await prisma.user.update({
    where: {
      loginId: body.loginId,
    },
    data: {
      nickname: body.nickname,
      email: body.email,
    },
  });

  return NextResponse.json(newUser);
}
