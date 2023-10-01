import Button from '@/components/atoms/Button';
import Link from 'next/link';

export default function Title() {
  return (
    <Link href="/" className="flex justify-center items-center w-60 h-full">
      <Button type="neutral" outline={false} fontSize="xlarge">
        CE Community
      </Button>
    </Link>
  );
}
