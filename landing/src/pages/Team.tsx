import { FooterNav } from '../components/nav/FooterNav';
import { HeaderNav } from '../components/nav/HeaderNav';
import { Heading, SubHeading, TeamDescription, TeamHeading } from '../components/text/Text';

import { FaTwitter, FaGithub, FaTwitch } from 'react-icons/fa';

export const Team = () => {
  return (
    <div>
      <div>
        <HeaderNav />
      </div>

      <section>
        <div className="p-4">
          <Heading innerText="We believe streaming should be simple, and fast." />
          <div>
            <SubHeading innerText="Your priceless time shouldn’t be wasted setting up a stream, and trouble shooting latency between your stream." />
          </div>
          <div>
            <SubHeading innerText="Mumble is a streaming platform that allows you to stream your content to your audience in a matter of seconds." />
          </div>
        </div>
        <div>
          <Heading innerText="Meet the Team" className="p-4" />
          <div className="p-4">
            <div className="p-4 bg-gray-400 w-44 h-44 border-gray-400 rounded-lg"></div>
            <div className="p-1"></div>
            <div className="w-40">
              <TeamHeading innerText="Deondre English" className="" />
              <TeamDescription innerText="Founder, Designer & Engineer" className="" />
            </div>
            <div className="p-1"></div>
            <div className="flex">
              <div className="">
                <a href='https://twitter.com/Deondre19753361'><FaTwitter /></a>
              </div>
              <div className="ml-2">
                <a href='https://github.com/deondreE'><FaGithub /></a>
              </div>
              <div className="ml-2">
                <a href='https://www.twitch.tv/devmade4'><FaTwitch /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <Heading innerText="Sponsors..." />
          <div className="mt-12 mb-12">
            <SubHeading innerText="Sponsors to be displayed soon...." />
          </div>
        </div>
      </section>

      <div>
        <FooterNav />
      </div>
    </div>
  );
};
