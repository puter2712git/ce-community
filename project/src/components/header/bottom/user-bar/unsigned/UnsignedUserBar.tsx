import Link from 'next/link';

export default function UnsignedUserBar() {
  return (
    <div className="flex flex-row gap-3">
      <Link
        href="/sign-in"
        className="flex justify-center items-center h-full px-3 text-primary text-sm hover:animate-fade"
      >
        로그인
      </Link>
      <Link
        href="/sign-up"
        className="flex justify-center items-center h-full px-3 text-secondary text-sm hover:animate-fade"
      >
        회원가입
      </Link>
    </div>
  );
}
