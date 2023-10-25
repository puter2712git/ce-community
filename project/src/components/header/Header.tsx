import BottomHeader from './bottom/BottomHeader';
import TopHeader from './top/TopHeader';

export default function Header() {
  return (
    <header className="sticky flex h-auto w-full justify-center">
      <div className="w-11/12 max-w-[1300px]">
        <TopHeader />
        <BottomHeader />
      </div>
    </header>
  );
}
