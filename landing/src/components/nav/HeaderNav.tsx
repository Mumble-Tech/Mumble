
import logo from '../../assets/logo.svg';

import './nav.scss';

export const HeaderNav = () => {
    return (
        <div className='flex'>
            <div className='flex'>
                <a href='/'><img src={logo} className='w-32 h-32' /></a>
               <span className='text-3xl p-10 img-font text-white'>Mumble</span>
            </div>
            <div className='p-10 justify-center text-2xl font'>
                <a id='active' href='roadmap'>Roadmap</a>
                <a id='link'>Team</a>
                <a id='link'>Blog</a>
                <a id='link'>Docs</a>
                <a id='link'>Careers</a>
            </div>
        </div>
    );
};