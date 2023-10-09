import { executeQuery } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export interface IPost {
  id: number;
  title: string;
  date: string;
  user_id: string;
  name: string;
}

export interface UserData {
  id: number;
  name: string;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const startId = (body.pageId - 1) * 15;

  const result = await executeQuery({
    query: `SELECT p.id, p.title, p.date, u.name 
	FROM post as p 
	INNER JOIN user as u ON p.user_id = u.id 
    ORDER BY id DESC
	LIMIT ?, 15;
	`,
    values: [startId],
  });

  return NextResponse.json(result);
}
