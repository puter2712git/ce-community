import { use } from 'react';

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = use(fetchData());
  return (
    <section>
      <nav></nav>
      {children}
      {data.userId}
      {data.id},{data.title},{data.body}
    </section>
  );
}

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();
  console.log(data);
  return data;
}
