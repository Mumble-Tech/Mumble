import './contentdrawer.scss';
import { ContentPreview } from './LiveContentPreview/ContentPreview';
import { SceneContent } from './SceneContent/SceneContent';



export const ContentDrawer = (props: { className: string}) => {
  return (
    <div className={`content-drawer ${props.className}`}>
      Welcome to the Content Drawer
      <div className="content-drawer--content">
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
          <div className="scene-structure">
            <SceneContent rootSceneName="Scene Name" />
          </div>
          {/* ! Cotent Preview needs to be onClick */}
          {/* <div className="preview--content"> 
            <ContentPreview />
          </div> */}
        </div>
        <div className="preview--audio left">
          <span>Preview of the audio setting</span>
        </div>
      </div>
    </div>
  );
};
