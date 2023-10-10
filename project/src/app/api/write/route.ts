import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      date: new Date(),
      author: {
        connect: { id: 1 },
      },
    },
  });

  return NextResponse.json(post);
}
