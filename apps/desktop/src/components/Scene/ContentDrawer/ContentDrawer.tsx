import './contentdrawer.scss';
import { SceneContent } from './SceneContent/SceneContent';

export const ContentDrawer = (props: { className: string }) => {
    return (
        <div className={`content-drawer ${props.className}`}>
            Welcome to the Content Drawer
            <div className="content-drawer--content">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'auto auto',
                    }}
                >
                    <div className="scene-structure">
                        <SceneContent rootSceneName="Scene Name" />
                    </div>
                </div>
                <div className="preview--audio left">
                    <span>Preview of the audio setting</span>
                </div>
            </div>
        </div>
    );
};
