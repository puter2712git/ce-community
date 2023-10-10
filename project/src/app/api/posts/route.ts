import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export interface IPost {
  id: number;
  title: string;
  date: string;
  author: { name: string };
}

export interface UserData {
  id: number;
  name: string;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const startId = (body.pageId - 1) * 15;

  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      date: true,
      author: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      id: 'desc',
    },
    skip: startId,
    take: 15,
  });

  return NextResponse.json(posts);
}
