import WriteForm from '@/components/write/WriteForm';

export default function WritePage() {
  return (
    <div className="mt-[80px] flex w-full justify-center">
      <section className="w-[90%] max-w-[800px] sm:w-1/2">
        <WriteForm />
      </section>
    </div>
  );
}
