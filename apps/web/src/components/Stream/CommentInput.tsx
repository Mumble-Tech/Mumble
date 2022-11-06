export const CommentInput = () => {
  return (
    <div className="w-full h-[4rem] bg-sky-700 rounded-md relative top-[27rem]">
      <form className="flex">
        <input
          type="text"
          className="w-full h-[4rem] rounded-md text-3xl p-2 overflow-hidden"
          placeholder="Type a comment..."
        />
      </form>
    </div>
  );
};
