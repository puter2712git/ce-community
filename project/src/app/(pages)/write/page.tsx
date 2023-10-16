import WriteForm from '@/components/write/WriteForm';

export default function WritePage() {
  return (
    <div className="flex justify-center w-full mt-[80px]">
      <section className="w-[90%] sm:w-1/2 max-w-[800px]">
        <WriteForm />
      </section>
    </div>
  );
}
