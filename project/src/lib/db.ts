import { PrismaClient } from '@prisma/client';

// dotenv.config({ path: '../../../.env.local' });

const prisma = new PrismaClient();
export default prisma;

// const db = mysql({
//   config: {
//     host: process.env.MYSQL_HOST,
//     port: Number(process.env.MYSQL_PORT),
//     database: process.env.MYSQL_DATABASE,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//   },
// });
// export async function executeQuery({
//   query,
//   values,
// }: {
//   query: any;
//   values: any;
// }) {
//   try {
//     const results = await db.query(query, values);
//     await db.end();
//     return results;
//   } catch (error) {
//     return error;
//   }
// }
