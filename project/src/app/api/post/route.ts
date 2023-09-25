import { executeQuery } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

interface RequestBody {
  title: string;
  content: string;
  id: number;
}

export async function POST(req: NextRequest) {
  const body: RequestBody = await req.json();

  const res = await executeQuery({
    query: 'INSERT INTO post(title, content, user_id) VALUES(?, ?, ?)',
    values: [body.title, body.content, body.id],
  });

  return NextResponse.json(res);
}
