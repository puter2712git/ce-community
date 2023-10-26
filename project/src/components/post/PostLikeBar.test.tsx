import prisma from '@/lib/db';
import { prismaMock } from '@/lib/db-mock';
import { IUser } from '@/lib/user/types';
import '@testing-library/jest-dom';

async function test(user: any) {
  return await prisma.user.create({ data: user });
}

it('Test you like this post: ', async () => {
  const user = {
    id: 4,
    loginId: 'mocktest',
    password: '12345678',
    nickname: 'mocktester',
    email: 'tester@gmail.com',
  };

  prismaMock.user.create.mockResolvedValue(user);

  await expect(test(user)).resolves.toEqual({
    id: 4,
    loginId: 'mocktest',
    password: '12345678',
    nickname: 'mocktester',
    email: 'tester@gmail.com',
  });
});
