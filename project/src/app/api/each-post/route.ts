import { executeQuery } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const res = await executeQuery({
    query: `SELECT p.id, p.title, p.date, p.content, u.name 
	FROM post as p 
	INNER JOIN user as u
	ON p.user_id = u.id
	WHERE p.id = ?`,
    values: [body.postId],
  });

  return NextResponse.json(res);
}
