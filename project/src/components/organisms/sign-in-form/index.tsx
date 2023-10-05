'use client';

import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';

import Input from '@/components/atoms/input';
import Button from '@/components/atoms/button';

export default function SignInForm() {
  const { register, handleSubmit } = useForm();

  return (
    <form
      className="flex flex-col items-center w-full h-auto gap-5"
      onSubmit={handleSubmit(async (data) => {
        const res = await signIn('credentials', {
          email: data.email,
          password: data.password,
          redirect: true,
          callbackUrl: '/',
        });
      })}
    >
      <div className="flex justify-around items-center gap-10 w-9/12">
        <Input
          id="email"
          type="email"
          placeholder="example@ajou.ac.kr"
          {...register('email')}
          variant="primary"
          fontSize="xlarge"
        />
      </div>
      <div className="flex justify-around items-center gap-10 w-full">
        <Input
          id="password"
          type="password"
          placeholder="***********"
          {...register('password')}
          variant="primary"
          fontSize="xlarge"
        />
      </div>
      <Button type="submit" variant="primary" fontSize="large">
        로그인
      </Button>
    </form>
  );
}
