'use client';

export default function PageUpPage() {
  async function handleSubmit(e: any): Promise<void> {
    e.preventDefault();

    const email: string = e.target.email.value;
    const password: string = e.target.password.value;

    fetch('/api/auth/sign-up', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      console.log(res.status);
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="아이디" />
        <input type="text" name="password" placeholder="비밀번호" />
        <input type="submit" value="회원가입" />
      </form>
    </>
  );
}
