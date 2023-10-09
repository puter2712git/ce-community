interface IPostTopInfo {
  title: string;
  author: string;
  date: string;
}

export default function PostTopInfo(props: IPostTopInfo) {
  return (
    <section className="w-full h-32">
      {/* 제목 */}
      <div className="flex items-center w-full h-1/2 border-b border-solid border-black">
        <div className="flex justify-center items-center w-2/6 h-full bg-black text-white text-m">
          제목
        </div>
        <div className="flex justify-center items-center w-4/6 h-full bg-white text-black text-m">
          {props.title}
        </div>
      </div>

      {/* 작성자, 작성 날짜 */}
      <div className="flex items-center w-full h-1/2 border-b border-solid border-black">
        {/* 작성자 */}
        <div className="flex items-center w-1/2 h-full">
          <div className="flex justify-center items-center w-2/6 h-full bg-gray-600 text-white text-m">
            작성자
          </div>
          <div className="flex justify-center items-center w-4/6 h-full bg-white text-black text-m">
            {props.author}
          </div>
        </div>
        {/* 작성 날짜 */}
        <div className="flex items-center w-1/2 h-full">
          <div className="flex justify-center items-center w-2/6 h-full bg-gray-600 text-white text-m">
            작성 날짜
          </div>
          <div className="flex justify-center items-center w-4/6 h-full bg-white text-black text-m">
            {props.date}
          </div>
        </div>
      </div>
    </section>
  );
}
