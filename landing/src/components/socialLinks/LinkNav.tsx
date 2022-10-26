import './links.css';

import { DiGithubBadge } from 'react-icons/di';
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';

export const SocialLinkNav = () => {
  return (
    <footer className="flex lg:fixed lg:bottom-[4rem] lg:left-[7.5rem] footer">
      <div
        className="w-20 h-20 link shadow-md"
        style={{
          backgroundColor: `#AFCBFF`
        }}
      >
        <DiGithubBadge className="w-20 h-20 shadow-lg" />
      </div>
      <div
        className="w-20 h-20 link shadow-md"
        style={{
          backgroundColor: `#B5B9FF`
        }}
      >
        <AiFillYoutube className="w-16 h-20 ml-2 shadow-lg" />
      </div>
      <div
        className="w-20 h-20 link shadow-md"
        style={{
          backgroundColor: `#87D5B3`
        }}
      >
        <AiOutlineTwitter className="w-16 h-20 ml-2 shadow-lg" />
      </div>
      <div
        className="w-20 h-20 link shadow-md"
        style={{
          backgroundColor: `#FFABAB`
        }}
      >
        <SiGmail className="w-14 h-20 ml-[.70rem] shadow-lg" />
      </div>
    </footer>
  );
};
