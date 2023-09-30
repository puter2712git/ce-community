import Button from '@/components/atoms/Button';
import Link from 'next/link';

export default function Title() {
  return (
    <Link href="/" className="flex justify-center items-center w-60 h-full">
      <Button
        props={{
          isOutline: false,
          color: 'normal',
          size: 'lg',
        }}
      >
        CE Community
      </Button>
    </Link>
  );
}
