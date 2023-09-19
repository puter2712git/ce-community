import { executeQuery } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const result = await executeQuery({
    query: 'SELECT * FROM board',
    values: [],
  });

  return NextResponse.json(result);
}
