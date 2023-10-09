interface IPostTableContent {
  content: string;
}

export default function PostTableContent(props: IPostTableContent) {
  return (
    <section className="flex justify-center w-full h-80">
      <textarea
        className="w-full h-full text-m bg-white resize-none px-5 py-5"
        disabled
        value={props.content}
      />
    </section>
  );
}
