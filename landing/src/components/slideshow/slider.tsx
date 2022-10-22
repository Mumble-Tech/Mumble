import { Slide } from "react-slideshow-image";

import slideImages from "./data/images";

import "react-slideshow-image/dist/styles.css";
import styles from "./slider.module.css";
import { Image } from "@chakra-ui/react";

export default function Slider() {
  return (
      <div className='w-full h-96 mt-10'>
        <Slide easing="ease" cssClass="bg-slate-300">
          {slideImages.map((slide: any, index: any) => (
            <div className={styles.slide} key={slide}>
              <Image src={slideImages[index]} />
            </div>
          ))}
        </Slide>
      </div>
  );
}
