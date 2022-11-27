import { Scene } from '../../../components/Scene/Scene';

export const SceneEditor = () => {
    return (
        <div className="block">
            <h1>Scene Editor</h1>

            <div>
                {/* ! Core Scene is a basicially a grid shape. */}
                <Scene />
            </div>
        </div>
    );
};
