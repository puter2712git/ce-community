import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export async function GET(
  req: NextRequest,
  { params }: { params: { postId: string } },
) {
  const postId = Number(params.postId);
  const like = await prisma.postLike.findUnique({
    where: {
      postId: postId,
    },
    select: {
      like: true,
      postId: true,
      users: {
        select: {
          id: true,
        },
      },
    },
  });

  return NextResponse.json(like);
}

export async function POST(
  req: NextRequest,
  { params }: { params: { postId: string } },
) {
  try {
    const postId = Number(params.postId);
    const body = await req.json();

    const updatedLike = await prisma.postLike.update({
      where: {
        postId: postId,
      },
      data: {
        like: body.like,
        users: {
          connect: {
            id: body.userId,
          },
        },
      },
    });

    return NextResponse.json(updatedLike);
  } catch (err: unknown) {}
}
