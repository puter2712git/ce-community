import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      date: new Date(),
      user: {
        connect: { id: body.userId },
      },
    },
  });

  return NextResponse.json(post);
}
