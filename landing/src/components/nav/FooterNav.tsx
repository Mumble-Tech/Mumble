import { Heading } from '../text/Text';
import { FaTwitter, FaDiscord, FaInstagram, FaGithub, FaTwitch } from 'react-icons/fa';

import logo from '../../assets/logo.svg';

interface FooterNavProps {
  children: React.ReactNode;
  link?: string;
}

const FooterLink = ({ children, link }: FooterNavProps) => {
  return (
    <a className="p-1" href={link}>
      {children}
    </a>
  );
};

export const FooterNav = () => {
  return (
    <section className="w-full flex" style={{ backgroundColor: '#98694F' }}>
      <div className="p-2">
        <img src={logo} alt="logo" className="w-32 h-32" />
        <div className="p-2">
          <h1 className="text-2xl text-white" style={{ fontFamily: 'Jua' }}>
            Mumble Streaming
          </h1>
          <span className="text-[.75rem] copyright" style={{ color: '#AFCBFF' }}>
            ©copyright 2022 Mumble Tech Inc.
          </span>
        </div>
        <div className="flex p-1">
          {/* Twitter, Discord, Instagram, GitHub, Twitch */}
          <FooterLink link="https://twitter.com/EnglishDeondre">
            <FaTwitter />
          </FooterLink>
          <FooterLink link="https://discord.gg/6D3CBWrvCE">
            <FaDiscord />
          </FooterLink>
          <FooterLink link="">
            <FaInstagram />
          </FooterLink>
          <FooterLink link="https://github.com/Mumble-Tech/Mumble">
            <FaGithub />
          </FooterLink>
          <FooterLink link="https://www.twitch.tv/devmade4">
            <FaTwitch />
          </FooterLink>
        </div>
      </div>
      <div className="flex font-thin">
        <div className="mt-10 p-4">
          <h1 className="text-2xl text-white font-bold">About</h1>
          <ul className="text-white">
            <li className="link">team</li>
            <li className="link">faq</li>
            <li className="link">careers</li>
            <li className="link">changelog</li>
            <li className="link">blog</li>
          </ul>
        </div>
        <div className="mt-10 p-4">
          <h1 className="text-2xl text-white font-bold">Downloads</h1>
          <ul className="text-red-200">
            <li className="link--inactive">Macos</li>
            <li className="link--inactive">Windows</li>
            <li className="link--inactive">Linux</li>
          </ul>
        </div>
        <div className="mt-10 p-4">
          <h1 className="text-2xl text-white font-bold">Developers</h1>
          <ul className="text-white">
            <li className="link">Documentation</li>
            <li className="link">Contribute</li>
            <li className="link--inactive">Extensions</li>
            <li className="link--inactive">Self Host</li>
          </ul>
        </div>
        <div className="mt-10 p-4">
          <h1 className="text-2xl text-white font-bold">Org</h1>
          <ul className="text-white">
            <li className="link">Patreon</li>
            <li className="link--inactive">License</li>
            <li className="link--inactive">Privacy</li>
            <li className="link--inactive">Terms</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
