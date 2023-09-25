import { executeQuery } from '@/lib/db';
import { signJwtAccessToken } from '@/lib/jwt';
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

  if (user.length && (await bcrypt.compare(body.password, user[0].password))) {
    const { password, ...userWithoutPass } = user[0];

    const accessToken = signJwtAccessToken(userWithoutPass);
    const result = {
      ...userWithoutPass,
      accessToken,
    };

    return Response.json(result);
  }
  return Response.json(null);
}
