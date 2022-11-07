import type { NextPage } from 'next';
import CommentContainer from '../../components/Containers/Stream/CommetContainer';
import { StreamContainer } from '../../components/Containers/Stream/VideoContainer';
import Comment from '../../components/Stream/Comment';
import { CommentInput } from '../../components/Stream/CommentInput';

const Watch: NextPage = () => {
  return (
    <div className='custom-scroll'>
      <CommentContainer>
        <Comment commentContent={'Welcome to the world of comments testing the content'} />
        <Comment commentContent={'working dev'} />
        <Comment commentContent={'working dev'} />
        <Comment commentContent={'working dev'} />
        <Comment commentContent={'working dev'} />
        <Comment commentContent={'working dev'} />
        <CommentInput />
      </CommentContainer>
      <StreamContainer />
    </div>
  );
};

export default Watch;
