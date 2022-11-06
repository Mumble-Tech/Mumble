type CommentContainerProps = {
  children: React.ReactNode;
};

/** Container for the commment section of streams, commets can be toggled. */
const CommentContainer = ({ children }: CommentContainerProps) => {
  return (
    <div className="p-6 relative left-[2em] top-[6em] bg-sky-800 w-96 h-[40rem] border rounded-md overflow-y-scroll">
      {children}
    </div>
  );
};

export default CommentContainer;
