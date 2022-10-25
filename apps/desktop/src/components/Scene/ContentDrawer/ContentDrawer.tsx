import './contentdrawer.scss';
import { ContentPreview } from './LiveContentPreview/ContentPreview';

export const ContentDrawer = () => {
  return (
    <div className="content-drawer">
      Welcome to the Content Drawer
      <div className="content-drawer--content">
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
          <div className="scene-structure">
            <span>test the code</span>
          </div>
          <div className="preview--content">
            <ContentPreview />
          </div>
        </div>
        <div className="preview--audio left">
          <span>Preview of the audio setting</span>
        </div>
      </div>
    </div>
  );
};
