import UserToolbar from '@/components/molecules/header/UserToolbar';

export default function BottomHeader() {
  return (
    <section className="flex justify-center items-center w-full h-2/6 border-solid border-b border-gray">
      <div className="flex justify-end items-cetner w-9/12 h-full">
        <UserToolbar />
      </div>
    </section>
  );
}
