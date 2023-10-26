'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface ISearchForm {
  searchText: string;
}

export default function BoardSearchbar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchForm = useForm<ISearchForm>();

  function onValid(data: ISearchForm) {
    router.push(`${pathname}?search=${data.searchText}`);
    router.refresh();
  }

  return (
    <form onSubmit={searchForm.handleSubmit(onValid)}>
      <input {...searchForm.register('searchText')} />
      <button type="submit">검색</button>
    </form>
  );
}
