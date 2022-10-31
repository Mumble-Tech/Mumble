import axios from 'axios';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import sideImage from '../../../../assets/SideImage.jpg';
import { ErorrContainer } from '../../../Containers/ErrorContainer';
import { isLoggedIn } from '../../../Scene/State/login_state';
import { Checkbox } from '../Inputs/Checkbox';
import { Input } from '../Inputs/Input';
import { Label } from '../Inputs/Label';

import './form.scss';

export const SiginForm = () => {
  const [fullname, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pnumber, setPNumber] = useState('');
  const [password, setPassword] = useState('');

  const [login, setLogin] = useRecoilState(isLoggedIn);

  async function handleSubmit(e: any) {
    e.preventDefault();

    const user = {
      name: fullname,
      username: username,
      email: email,
      pnumber: pnumber,
      password: password
    };

    await axios
      .post('http://localhost:8080/api/user/register', JSON.stringify(user))
      .catch((err) => {
        return <ErorrContainer text={err} />;
      });

    setLogin(true);
  }
  return (
    <div>
      {!login ? (
        <form className="login-container">
          {/* <img src={sideImage} className='img' />   */}
          <div className="grid">
            <div className="template">
              <Label text="Full Name" />
              <br />
              <Input
                onChange={(e: any) => {
                  setFullName(e.target.value);
                }}
              />
            </div>
            <div className="template">
              <Label text="Username" />
              <br />
              <Input
                onChange={(e: any) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="template">
              <Label text="Email" />
              <br />
              <Input
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="template">
              <Label text="Phone Number" />
              <br />
              <Input
                onChange={(e: any) => {
                  setPNumber(e.target.value);
                }}
              />
            </div>
            <div className="template">
              <Label text="Password" />
              <br />
              <Input
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="template">
              <Label text="Confirm Password" />
              <br />
              <Input />
            </div>
            <div className="template">
              <Checkbox />
              <span className="check-txt">I accept terms and conditions</span>
            </div>
            <div className="template">
              <Checkbox />
              <span className="check-txt">I would like to recieve news</span>
            </div>
            <div className="center">
              <button
                className="pos-center"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Signup
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div></div>
      )}
    </div>
  );
};
