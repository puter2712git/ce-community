import UserBar from './user-bar/UserBar';

export default function BottomHeader() {
  return (
    <section className="h-[35px] w-full border-b border-solid border-gray-200">
      <UserBar />
    </section>
  );
}
