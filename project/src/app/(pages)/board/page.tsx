async function getBoard() {
  const res = await fetch('http://localhost:3000/api/board');
  return res.json();
}

export default async function BoardPage() {
  const datas = await getBoard();

  console.log(datas);

  return (
    <ul>
      {datas.map((data: any) => (
        <li key={data.index}>{data.title}</li>
      ))}
    </ul>
  );
}
