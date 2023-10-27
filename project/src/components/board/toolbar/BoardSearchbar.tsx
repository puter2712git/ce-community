'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

interface ISearchForm {
  searchText: string;
}

export default function BoardSearchbar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchForm = useForm<ISearchForm>();

  const inputRef = useRef<HTMLInputElement>(null);

  function onValid(data: ISearchForm) {
    router.push(`${pathname}?search=${data.searchText}`);
    searchForm.setFocus('searchText');
  }

  return (
    <form onSubmit={searchForm.handleSubmit(onValid)} className="space-x-2">
      <input
        className="w-60 rounded-[5px] border border-solid border-primary px-3 py-2 text-m"
        {...searchForm.register('searchText')}
      />
      <button
        type="submit"
        className="rounded-[5px] border border-solid border-primary px-3 py-2 text-m text-primary"
      >
        검색
      </button>
    </form>
  );
}
