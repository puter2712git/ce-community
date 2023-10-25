import Image from 'next/image';
import Link from 'next/link';
import Navigator from './navigator/Navigator';

export default function TopHeader() {
  return (
    <section className="h-[70px] w-full border-b border-solid border-gray-200">
      <div className="flex h-full w-full items-center justify-between">
        <Link
          href="/"
          className="flex h-full w-[180px] items-center justify-center text-3xl font-extrabold"
        >
          Community
        </Link>
        <Navigator />
      </div>
    </section>
  );
}
