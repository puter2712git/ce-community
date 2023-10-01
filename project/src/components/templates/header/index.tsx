import BottomHeader from '@/components/organisms/header/BottomHeader';
import TopHeader from '@/components/organisms/header/TopHeader';

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center w-full h-40">
      <TopHeader />
      <BottomHeader />
    </header>
  );
}
