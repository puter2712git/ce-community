import { executeQuery } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const result = await executeQuery({
    query: 'SELECT * FROM post',
    values: [],
  });

  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = await executeQuery({
    query: 'SELECT * FROM user WHERE id = ?',
    values: [body.id],
  });

  return NextResponse.json(result);
}
