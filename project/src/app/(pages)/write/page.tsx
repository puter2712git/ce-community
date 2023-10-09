'use client';

import WriteForm from '@/components/organisms/write-form';

export default function PostPage() {
  return (
    <div className="flex justify-center items-center w-full mt-20">
      <section className="w-1/3">
        <WriteForm />
      </section>
    </div>
  );
}
