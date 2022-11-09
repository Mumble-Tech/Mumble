import './App.css';
import { Button } from './components/button/Button';
import { HeaderNav } from './components/nav/HeaderNav';
import { Heading, SubHeading } from './components/text/Text';

import mumbleapp from './assets/mumbleapp.png';
import { FooterNav } from './components/nav/FooterNav';

function Landing() {
  return (
    <div className="w-full h-full">
      <div> 
        <HeaderNav />
      </div>
      <section className=''>
        <Heading 
          innerText='A Streaming Service for the Future...' 
          className='flex justify-center'
        />
        <SubHeading 
          innerText='Mumble changes everything...  Just try it for yourself.'
          className='flex justify-center text-center w-[50%] m-auto'
        />
      </section>
      <div className='flex justify-center p-4'>
        <Button label='Join the waitlist' />
        <div className='p-4'></div>
        <a href='https://github.com/Mumble-Tech/Mumble'><Button label='Star on GitHub' img={true} /></a>
      </div>
      <SubHeading 
        innerText='Coming soon on macOS, Windows and Linux. Shortly after to iOS & Android.' 
        className='p-4 flex justify-center underline' 
      />
      <div className='flex justify-center'>
        <img src={mumbleapp} alt='Mumble App Image' className='p-8 border-black rounded-lg' />
      </div>
      <footer>
        <FooterNav />
      </footer>
    </div>
  );
}

export default Landing;
