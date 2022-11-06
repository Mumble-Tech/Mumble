// import Image from 'next/image';

type CommentProps = {
  commentContent: string;
  commentAuthor?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  commentAuthorImage?: any;
};

const Comment = ({ commentContent }: CommentProps) => {
  return (
    <div className="p-4 bg-sky-300 border-sky-300 rounded-sm shadow-lg w-auto h-auto mb-4">
      <div className="flex">
        {/* <Image src={commentAuthorImage} alt='user-image' /> */}
        <div className="border-red-600 rounded-full w-10 h-10 bg-red-600 shadow-lg"></div>
        <span className="p-2">{commentContent}</span>
        {/* <span className=''>{commentAuthor}</span> */}
      </div>
      <div></div>
    </div>
  );
};

export default Comment;
