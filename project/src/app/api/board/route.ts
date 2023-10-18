import prisma from '@/lib/db';
import { verifyJwt } from '@/lib/jwt';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export async function GET(req: NextRequest) {
  //   const accessToken = req.headers.get('authorization');
  //   if (!accessToken || !verifyJwt(accessToken)) {
  //     return new Response(JSON.stringify({ error: 'No Authorization' }), {
  //       status: 401,
  //     });
  //   }

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
