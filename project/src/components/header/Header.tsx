import BottomHeader from './bottom/BottomHeader';
import TopHeader from './top/TopHeader';

export default function Header() {
  return (
    <header className="flex justify-center sticky w-full h-auto">
      <div className="w-11/12 max-w-[1300px]">
        <TopHeader />
        <BottomHeader />
      </div>
    </header>
  );
}
