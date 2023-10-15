import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const datas = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      date: true,
      author: {
        select: {
          nickname: true,
        },
      },
    },
    orderBy: {
      id: 'desc',
    },
  });

  return NextResponse.json(datas);
}