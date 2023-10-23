import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const updatedLike = await prisma.postLike.update({
    where: {
      postId: body.postId,
    },
    data: {
      like: body.like,
      dislike: body.dislike,
    },
  });

  return NextResponse.json(updatedLike);
}
