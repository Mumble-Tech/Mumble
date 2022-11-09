import './App.css';
import { Button } from './components/button/Button';
import { HeaderNav } from './components/nav/HeaderNav';
import { Heading, SubHeading } from './components/text/Text';

import mumbleapp from './assets/mumbleapp.png';
import { FooterNav } from './components/nav/FooterNav';
import { useState } from 'react';

function Landing() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle)
    console.log('clicked');
  };

  const handleSubmit = () => {
    setToggle(!toggle);
    console.log('submitted');
  };

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
        {!toggle && (
          <Button onClick={handleClick} label='Join the waitlist' />
        )}
        {toggle && (
          <div className='flex'>
            <input type='text' placeholder='Enter email...' className='p-2 border-white rounded-lg' />
            <button className='ml-2 cursor-pointer bg-sky-100 hover:bg-sky-200 p-2 border rounded-lg' onClick={handleSubmit}>Submit</button>
          </div>
        )}
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
