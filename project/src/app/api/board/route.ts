import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams;

  const searchContent = query.has('search') ? query.get('search')! : '';

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
    where: {
      content: {
        contains: searchContent,
      },
    },
  });

  return NextResponse.json(datas);
}
