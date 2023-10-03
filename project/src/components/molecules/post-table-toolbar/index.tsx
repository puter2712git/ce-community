import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Link from 'next/link';

export default function PostTableToolbar() {
  return (
    <section className="flex justify-between w-1/2">
      <Link href="/write">
        <Button variant="neutral" outline={true} fontSize="medium">
          새 글쓰기
        </Button>
      </Link>
      <div className="flex gap-2">
        <Input variant="primary" outline={true} className="w-80 rounded-2xl" />
        <Button variant="secondary" outline={true} fontSize="medium">
          검색
        </Button>
      </div>
    </section>
  );
}
