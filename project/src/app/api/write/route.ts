import { executeQuery } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = await executeQuery({
    query: `INSERT INTO post(title, content, date, user_id) VALUES(?, ?, NOW(), ?)`,
    values: [body.title, body.content, body.userId],
  });

  return NextResponse.json(result);
}
