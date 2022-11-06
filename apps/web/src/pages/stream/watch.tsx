import type { NextPage } from 'next';
import CommentContainer from '../../components/Containers/Stream/CommetContainer';
import { StreamContainer } from '../../components/Containers/Stream/VideoContainer';
import Comment from '../../components/Stream/Comment';
import { CommentInput } from '../../components/Stream/CommentInput';

const Watch: NextPage = () => {
  return (
    <div className="">
      <CommentContainer>
        <Comment commentContent={'working dev'} />
        <Comment commentContent={'working dev'} />
        <Comment commentContent={'working dev'} />
        <Comment commentContent={'working dev'} />
        <Comment commentContent={'working dev'} />
        <Comment commentContent={'working dev'} />
        <CommentInput />
      </CommentContainer>
      <StreamContainer />
      <h1>Watch</h1>
    </div>
  );
};

export default Watch;
