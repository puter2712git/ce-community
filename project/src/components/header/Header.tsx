import Link from 'next/link';
import UserInfo from './UserInfo';

export default function Header() {
  return (
    <header className="w-full h-28">
      {/* Top header */}
      <div className="flex flex-col justify-center items-center w-full h-3/5 border-solid border-b border-gray">
        <div className="flex justify-between items-center w-9/12 h-full">
          <div className="flex justify-center items-center w-40 h-full">
            <Link href="/">CE Community</Link>
          </div>
          <nav className="flex items-center h-full">
            <ul className="flex items-center h-full">
              <li className="h-full">
                <Link
                  href="/board"
                  className="flex justify-center items-center w-28 h-full"
                >
                  게시판
                </Link>
              </li>
              <li className="h-full">
                <Link
                  href="/project"
                  className="flex justify-center items-center w-28 h-full"
                >
                  프로젝트
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* Bottom header */}
      <div className="flex flex-col justify-center items-center w-full h-2/5 border-solid border-b border-gray">
        <div className="flex justify-end items-center w-9/12 h-3/12">
          <UserInfo />
        </div>
      </div>
    </header>
  );
}
