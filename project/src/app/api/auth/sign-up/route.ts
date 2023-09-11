import { executeQuery } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const result = await executeQuery({
    query: 'INSERT INTO user_sign(id, password) VALUES(?, ?)',
    values: [email, password],
  });

  return NextResponse.json(result);
}
