import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const post = await prisma.post.findUnique({
    where: {
      id: body.postId,
    },
    select: {
      id: true,
      title: true,
      date: true,
      content: true,
      user: {
        select: {
          name: true,
        },
      },
    },
  });

  return NextResponse.json(post);
}
