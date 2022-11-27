type CommentContainerProps = {
    children: React.ReactNode;
};

/** Container for the commment section of streams, commets can be toggled. */
const CommentContainer = ({ children }: CommentContainerProps) => {
    return (
        <div className="relative left-[2em] top-[6em] h-[40rem] w-96 overflow-y-scroll rounded-md border bg-sky-800 p-6">
            {children}
        </div>
    );
};

export default CommentContainer;
