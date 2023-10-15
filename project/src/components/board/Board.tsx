import BoardDatas from './BoardDatas';

export default function Board() {
  return (
    <table className="w-full table-fixed mt-[80px] border border-primary border-solid">
      <thead>
        <tr className="text-lg border-b border-solid border-gray-300">
          <th className="py-4 w-2/12">작성자</th>
          <th className="w-8/12">제목</th>
          <th className="w-2/12">날짜</th>
        </tr>
      </thead>
      <tbody>
        <BoardDatas />
      </tbody>
    </table>
  );
}
