// import Image from 'next/image';

type CommentProps = {
  commentContent: string;
  commentAuthor?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  commentAuthorImage?: any;
};

const Comment = ({ commentContent }: CommentProps) => {
  return (
    <div className="p-4 bg-red-300 border-red-300 rounded-lg shadow-xl w-auto h-auto mb-4">
      <div className="flex">
        {/* <Image src={commentAuthorImage} alt='user-image' /> */}
        <div className="border-blue-300 rounded-full w-10 h-10 bg-blue-300 shadow-lg"></div>
        <span className="p-2 text-1xl jua">{commentContent}</span>
        {/* <span className=''>{commentAuthor}</span> */}
      </div>
      <div></div>
    </div>
  );
};

export default Comment;
