'use client';

import { useRouter } from 'next/navigation';

export default function SignUpForm() {
  const router = useRouter();

  async function handleSubmit(e: any): Promise<void> {
    e.preventDefault();

    const name: string = e.target.name.value;
    const email: string = e.target.email.value;
    const password: string = e.target.password.value;

    fetch('/api/auth/sign-up', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    }).then((res) => {
      router.push('/');
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="이름" />
      <input type="text" name="email" placeholder="example@ajou.ac.kr" />
      <input type="password" name="password" placeholder="password" />
      <input type="submit" value="회원가입" />
    </form>
  );
}
