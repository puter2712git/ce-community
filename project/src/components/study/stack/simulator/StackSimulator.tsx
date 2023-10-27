import Link from 'next/link';
import IFrame from 'react-iframe';

export default function StackSimulator() {
  return (
    <section
      className={`aspect-[16/9] w-full border border-solid border-primary`}
    >
      <object data="http://127.0.0.1:5500/" className="h-full w-full"></object>
    </section>
  );
}
