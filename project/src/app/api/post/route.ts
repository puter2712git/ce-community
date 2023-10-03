import { executeQuery } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const res = await executeQuery({
    query: 'SELECT * FROM post WHERE id = ?',
    values: [body.id],
  });

  return NextResponse.json(res);
}
