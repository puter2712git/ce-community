import IFrame from 'react-iframe';

export default function StackSimulator() {
  return (
    <section
      className={`aspect-[16/9] w-full border border-solid border-primary`}
    >
      <IFrame url="" className="h-full w-full" />
    </section>
  );
}
