import Navigator from '@/components/molecules/header/Navigator';
import Title from '@/components/molecules/header/Title';

export default function TopHeader() {
  return (
    <section className="flex justify-center items-center w-full h-4/6 border-solid border-b border-gray">
      <div className="flex justify-between items-center w-9/12 h-full">
        <Title />
        <Navigator />
      </div>
    </section>
  );
}
