import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const post = await prisma.post.findUnique({
    where: {
      id: Number(body.postId),
    },
    select: {
      id: true,
      title: true,
      date: true,
      content: true,
      like: true,
      author: {
        select: {
          nickname: true,
        },
      },
    },
  });

  return NextResponse.json(post);
}
