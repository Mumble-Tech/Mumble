// import Image from 'next/image';

type CommentProps = {
    commentContent: string;
    commentAuthor?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    commentAuthorImage?: any;
};

const Comment = ({ commentContent }: CommentProps) => {
    return (
        <div className="mb-4 h-auto w-auto rounded-lg border-red-300 bg-red-300 p-4 shadow-xl">
            <div className="flex">
                {/* <Image src={commentAuthorImage} alt='user-image' /> */}
                <div className="h-10 w-10 rounded-full border-blue-300 bg-blue-300 shadow-lg"></div>
                <span className="text-1xl jua p-2">{commentContent}</span>
                {/* <span className=''>{commentAuthor}</span> */}
            </div>
            <div></div>
        </div>
    );
};

export default Comment;
