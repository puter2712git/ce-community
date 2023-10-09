import Button from '@/components/atoms/Button';
import Link from 'next/link';

export default function Navigator() {
  return (
    <nav className="flex items-center h-full">
      <Link
        className="flex justify-center w-40 h-full"
        href={{
          pathname: '/posts',
          query: { id: 1 },
        }}
      >
        <Button variant="neutral" outline={false} fontSize="medium">
          게시판
        </Button>
      </Link>
      <Link className="flex justify-center w-40 h-full" href="/project">
        <Button variant="neutral" outline={false} fontSize="medium">
          프로젝트
        </Button>
      </Link>
    </nav>
  );
}
