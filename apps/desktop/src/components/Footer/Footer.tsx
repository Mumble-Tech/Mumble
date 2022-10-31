import './footer.scss';

import cpu from '../../assets/Cpu.svg';
import stack from '../../assets/layer.svg';
import info from '../../assets/Info.svg';
import rec from '../../assets/Record button.svg';
import { useRecoilState } from 'recoil';
import { isLoggedIn } from '../Scene/State/login_state';
import { SiginForm } from '../Dashboard/Signin/Form/SigninForm';

export const Footer = () => {
  const [login, setLogin] = useRecoilState(isLoggedIn);

  const set = () => {
    setLogin(!login);
  };

  return (
    <div className="footer">
      {/* Right Side */}
      <div className="image-cont">
        <span className="percent last">11.2%</span>
        <img src={cpu} className="cpu" />
      </div>
      {/* Fps Counter */}
      <div className="image-cont">
        <img src={stack} className="stack" />
        <span className="fps">60fps</span>
        <div className="seperator pos" style={{}}></div>
      </div>
      <div className="image-cont">
        <img src={info} className="info" />
      </div>
      {/* Go Live Button / Sign in Button*/}
      <div className="image-cont">
        {login ? (
          <button className="live-btn-temp" onClick={set}>
            Go Live
          </button>
        ) : (
          <button className="live-btn-temp" onClick={set}>
            Sign in
          </button>
        )}
      </div>
      {/* Record Button */}
      <div>
        <img src={rec} className="rec" style={{ width: '50px !important', height: '50px' }} />
        <div className="seperator--left pos-right"></div>
      </div>
    </div>
  );
};
