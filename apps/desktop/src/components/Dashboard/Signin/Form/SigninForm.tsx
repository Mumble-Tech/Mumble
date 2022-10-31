import sideImage from '../../../../assets/SideImage.jpg';
import { Checkbox } from '../Inputs/Checkbox';
import { Input } from '../Inputs/Input';
import { Label } from '../Inputs/Label';

import './form.scss';

export const SiginForm = () => {
  function handleSubmit (e: any) {
    e.preventDefault();
  }
  return (
    <form className='login-container'>
    {/* <img src={sideImage} className='img' />   */}
    <div className='grid'>
      <div className='template'>
        <Label  text='Full Name'/>
        <br />
        <Input />
      </div>
      <div className='template'>
        <Label text='Username' />
        <br />
        <Input />
      </div>
      <div className='template'>
        <Label text='Email' />
        <br />
        <Input />
      </div>
      <div className='template'>
        <Label text='Phone Number' />
        <br />
        <Input />
      </div>
      <div className='template'>
        <Label text='Password' />
        <br />
        <Input />
      </div>
      <div className='template'>
        <Label text='Confirm Password' />
        <br />
        <Input />
      </div>
      <div className='center'>
        <button className='pos-center' onClick={(e) => {handleSubmit(e)}}>
            Signup
        </button>
      </div>
    </div>
  </form>
  )
  
  };
