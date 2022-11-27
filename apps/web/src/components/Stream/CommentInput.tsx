export const CommentInput = () => {
    return (
        <div className="relative top-[27rem] h-[4rem] w-full rounded-md bg-sky-700">
            <form className="flex">
                <input
                    type="text"
                    className="h-[4rem] w-full overflow-hidden rounded-md p-2 text-3xl"
                    placeholder="Type a comment..."
                />
            </form>
        </div>
    );
};
