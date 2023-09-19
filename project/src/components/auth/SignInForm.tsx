'use client';

import { signIn } from 'next-auth/react';

export default function SignInForm() {
  async function handleSubmit(e: any) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    const res = await signIn('credentials', {
      email: email,
      password: password,
      redirect: true,
      callbackUrl: '/',
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" placeholder="example@ajou.ac.kr" />
      <input type="password" name="password" placeholder="password" />
      <input type="submit" value="로그인" className="cursor-pointer" />
    </form>
  );
}
