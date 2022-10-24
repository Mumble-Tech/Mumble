
import './Titlebar.css';
import logo from '../../assets/logo.jpg';
import personIcon from '../../assets/person_icon.svg';
import circle from '../../assets/circle.svg';

export const Titlebar = () => {
    return (
        <div data-tauri-drag-region className="titlebar">
            {/* Logo in the app */}
            <div className='logo'>
                <img src={logo} className='img'/>
                <h1>Mumble</h1>
            </div>

            {/* Editor / Live Links */}
            <div className='links'>
                <h1>Editor</h1>
                <h1 className='active'>Live</h1>
            </div>

            {/* Live status */}
            <div className=''>
                <span className='text' style={{ left: '59em'}}>Offline</span>
                <img src={circle} style={{ padding: '1.25em', marginTop: '2px'}} className='icon'/>
            </div>

            {/* Live Viewer Count */}
            <div className=''>
                <span className='text'>0</span>
                <img src={personIcon} className='icon' />
            </div>

            
        </div>
    )
}