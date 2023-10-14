import Image from 'next/image';
import Link from 'next/link';
import Navigator from './navigator/Navigator';

export default function TopHeader() {
  return (
    <section className="w-full h-[70px] border-gray-200 border-b border-solid">
      <div className="flex justify-between items-center w-full h-full">
        <Link
          href="/"
          className="flex justify-center items-center w-[180px] h-full text-3xl font-extrabold"
        >
          Community
        </Link>
        <Navigator />
      </div>
    </section>
  );
}
