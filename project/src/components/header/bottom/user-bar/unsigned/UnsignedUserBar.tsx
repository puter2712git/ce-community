import Link from 'next/link';

export default function UnsignedUserBar() {
  return (
    <div className="flex flex-row gap-3">
      <Link
        href="/sign-in"
        className="flex h-full items-center justify-center px-3 text-sm text-primary hover:animate-fade"
      >
        로그인
      </Link>
      <Link
        href="/sign-up"
        className="flex h-full items-center justify-center px-3 text-sm text-secondary hover:animate-fade"
      >
        회원가입
      </Link>
    </div>
  );
}
