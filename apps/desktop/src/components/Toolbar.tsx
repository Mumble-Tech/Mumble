import './toolbar.css';
import { OfflineButton } from "./Buttons/OfflineButton";
import {TabsHeader} from "./TabsHeader";
export const Toolbar = () => {
  return (
    <div data-tauri-drag-region className="titlebar">
        <OfflineButton
          isOffline={true}
        />
    </div>
  );
};
