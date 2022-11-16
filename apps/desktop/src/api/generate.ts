import pptxgen from 'pptxgenjs';

// 1. create presentation
const pres = new pptxgen();

// 2. add slide
let slide = pres.addSlide();

slide.addText('Hello World from tauri app.', {
  x: 1.5,
  y: 1.5,
  color: '363636',
  fill: { color: 'F1F1F1' },
  align: pres.AlignH.center
});

/** Basic Generation of Powerpoint file. */
export const generate = () => {
  // 3. save presentation
  pres.writeFile({ fileName: 'test.pptx' });
  console.log('File saved');
};
