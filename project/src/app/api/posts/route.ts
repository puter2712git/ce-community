import { executeQuery } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export interface IPost {
  id: number;
  title: string;
  date: string;
  user_id: string;
  author: string;
}

export interface UserData {
  id: number;
  name: string;
}

export async function GET(req: NextRequest) {
  const result = await executeQuery({
    query: `SELECT id, title, date, user_id FROM post ORDER BY id DESC LIMIT 15`,
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
