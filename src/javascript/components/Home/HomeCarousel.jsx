import React, { useState, useRef } from 'react';

// Others
import { Carousel } from 'antd';

// Images
import idea from 'Images/home/idea.png';
import boceto from 'Images/home/prototipo-web.png';
import presencia from 'Images/home/presentacion-web.png';
import negocio from 'Images/home/negocio-web.png';
import empresa from 'Images/home/empresa-web.png';
import mas from 'Images/home/evoluciona.png';

// Componentes
import GrowStep from 'Comp/Home/GrowStep';

const HomeCarousel = () => {
  const [step, setStep] = useState(0);
  const slider = useRef();

  const changeStepNum = (from, to) => {
    setStep(to);
  };

  const changeStepSlide = nextStep => {
    setStep(nextStep);
    slider.current.goTo(nextStep);
  };

  return (
    <React.Fragment>
      <Carousel
        ref={ref => {
          slider.current = ref;
        }}
        beforeChange={changeStepNum}
        dotPosition="bottom"
        autoplay
        effect="fade"
      >
        <div>
          <GrowStep changeStepSlide={changeStepSlide} src={idea} step={step} />
        </div>
        <div>
          <GrowStep
            changeStepSlide={changeStepSlide}
            src={boceto}
            step={step}
          />
        </div>
        <div>
          <GrowStep
            changeStepSlide={changeStepSlide}
            src={presencia}
            step={step}
          />
        </div>
        <div>
          <GrowStep
            changeStepSlide={changeStepSlide}
            src={negocio}
            step={step}
          />
        </div>
        <div>
          <GrowStep
            changeStepSlide={changeStepSlide}
            src={empresa}
            step={step}
          />
        </div>
        <div>
          <GrowStep changeStepSlide={changeStepSlide} src={mas} step={step} />
        </div>
      </Carousel>
    </React.Fragment>
  );
};

export default HomeCarousel;
