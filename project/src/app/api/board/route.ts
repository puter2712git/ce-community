import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export async function GET(req: NextRequest) {
	console.log(req.nextUrl.searchParams);

  const datas = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      date: true,
      author: {
        select: {
          nickname: true,
          loginId: true,
        },
      },
    },
    orderBy: {
      id: 'desc',
    },
  });

  return NextResponse.json(datas);
}
