import './footer.scss';

import cpu from '../../assets/Cpu.svg';
import stack from '../../assets/layer.svg';
import info from '../../assets/Info.svg';
import rec from '../../assets/Record button.svg';

export const Footer = () => {
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
      {/* Go Live Button */}
      <div className="image-cont">
        <button className="live-btn-temp">Go Live</button>
      </div>
      {/* Record Button */}
      <div>
        <img src={rec} className="rec" style={{ width: '50px !important', height: '50px' }} />
        <div className="seperator--left pos-right"></div>
      </div>
    </div>
  );
};
