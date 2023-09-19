import { executeQuery } from '@/lib/db';
import * as bcrypt from 'bcrypt';

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();

  const user: any = await executeQuery({
    query: `SELECT * FROM user WHERE email = ?`,
    values: [body.email],
  });

  console.log(user);

  if (user.length && (await bcrypt.compare(body.password, user[0].password))) {
    return Response.json(user[0]);
  }
  return Response.json(null);
}
