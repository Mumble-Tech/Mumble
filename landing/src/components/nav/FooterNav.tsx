import { Heading } from "../text/Text";
import { FaTwitter, FaDiscord, FaInstagram, FaGithub, FaTwitch } from "react-icons/fa";

import logo from '../../assets/logo.svg';

interface FooterNavProps {
    children: React.ReactNode;
}

const FooterLink = ({children}: FooterNavProps) => {
    return (
        <div className='p-1'>
            {children}
        </div>
    );
};

export const FooterNav = () => {
    return (
        <section className='w-full flex' style={{backgroundColor: '#98694F'}}>
            <div className='p-2'>
                <img src={logo} alt='logo' className='w-32 h-32' />
                <div className='p-2'>
                    <h1 className='text-2xl text-white' style={{ fontFamily: 'Jua'}}>Mumble Streaming</h1>
                    <span className='text-[.75rem]' style={{ color: '#AFCBFF'}}>©copyright 2022 Mumble Tech Inc.</span>
                </div>
                <div className='flex p-1'>
                    {/* Twitter, Discord, Instagram, GitHub, Twitch */}
                    <FooterLink>
                        <FaTwitter />
                    </FooterLink>
                    <FooterLink>
                        <FaDiscord />
                    </FooterLink>
                    <FooterLink>
                        <FaInstagram />
                    </FooterLink>
                    <FooterLink>
                        <FaGithub />
                    </FooterLink>
                    <FooterLink>
                        <FaTwitch />
                    </FooterLink>
                </div>
            </div>
            <div className='mt-10 p-4'>
                <h1 className='text-2xl text-white'>About</h1>
                <ul className='text-white'>
                    <li>team</li>
                    <li>faq</li>
                    <li>careers</li>
                    <li>changelog</li>
                    <li>blog</li>
                </ul>
            </div>
            <div className='mt-10 p-4'>
                <h1 className='text-2xl text-white'>Downloads</h1>
                <ul className='text-red-200'>
                    <li>Macos</li>
                    <li>Windows</li>
                    <li>Linux</li>
                </ul>
            </div>
            <div className='mt-10 p-4'>
                <h1 className='text-2xl text-white'>Developers</h1>
                <ul className='text-white'>
                    <li>Documentation</li>
                    <li>Contribute</li>
                    <li>Extensions</li>
                    <li>Self Host</li>
                </ul>
            </div>
            <div className='mt-10 p-4'>
                <h1 className='text-2xl text-white'>Org</h1>
                <ul className='text-white'>
                    <li>Patreon</li>
                    <li>License</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
            </div>
        </section>
    );
}