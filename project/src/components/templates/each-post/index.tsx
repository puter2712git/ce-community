import PostContext, { IPostContext } from '@/components/organisms/post-context';

export default function PostContextTemplate(props: IPostContext) {
  return (
    <div className="flex justify-center w-full mt-40">
      <div className="w-1/2 h-auto border border-solid border-black">
        <PostContext postId={props.postId} />
      </div>
    </div>
  );
}
