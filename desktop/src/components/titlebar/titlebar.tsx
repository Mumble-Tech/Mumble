import './titlebar.css';

import settingsIcon from '../../assets/setting_Titlebar.svg';
import nodeViewIcon from '../../assets/Graph_Titlebar.svg';

export function Titlebar () {
    return (
        <div data-tauri-drag-region className="titlebar">
            <div className="titlebar-button" id="titlebar-minimize">
                <img
                    src="https://api.iconify.design/mdi:window-minimize.svg"
                />
            </div>
            <div className="titlebar-button" id="titlebar-maximize">
                <img
                    className="img"
                    src={nodeViewIcon}
                    alt="maximize"  
                />
            </div>
            <div className="titlebar-button" id="titlebar-close">
                <img className="img" src={settingsIcon} alt="close" />
            </div>
        </div>
    )
}