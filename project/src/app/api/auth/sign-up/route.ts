import { executeQuery } from '@/lib/db';
import * as bcrypt from 'bcrypt';

interface RequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const hashedPassword = await bcrypt.hash(body.password, 10);

  const res = await executeQuery({
    query: 'INSERT INTO user(name, email, password) VALUES(?, ?, ?)',
    values: [body.name, body.email, hashedPassword],
  });

  console.log(body);
  console.log(res);

  return Response.json(res);
}
