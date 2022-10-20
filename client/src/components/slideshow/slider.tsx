import { Slide } from "react-slideshow-image";

import slideImages from "./data/images";

import "react-slideshow-image/dist/styles.css";
import styles from "./slider.module.css";

export default function Slider() {
  return (
    <div className='w-full h-96 p-6 ml-8'>
      <Slide easing="ease">
        {slideImages.map((slide: any, index: any) => {
          return (
            <div className={styles.slide} key={slide}>
              <div style={{ backgroundImage: `url(${slideImages[index + 1]})` }}>
                {/* <span>Slide {index + 1}</span> */}
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
}
