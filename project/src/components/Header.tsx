import Link from 'next/link';
import Avatar from './Avatar';

export default function Header() {
  return (
    <header className="flex justify-center items-center w-full h-20">
      <nav className="flex items-center w-9/12 h-full">
        <div className="flex justify-center items-center w-40 h-full">
          <Link href="/">CE Community</Link>
        </div>
        <div className="flex justify-center items-center self-end w-40 h-full">
          <Link href="/board">게시판</Link>
        </div>
        <Avatar />
      </nav>
    </header>
  );
}
