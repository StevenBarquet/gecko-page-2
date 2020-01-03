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
      >
        <div>
          <GrowStep changeStepSlide={changeStepSlide} src={idea} step={step}>
            <h6>
              No necesitas más
              <br />
              <span>Nosotros la hacemos REALIDAD</span>
            </h6>
          </GrowStep>
        </div>
        <div>
          <GrowStep changeStepSlide={changeStepSlide} src={boceto} step={step}>
            <h6>
              Prototipo basado en propuestas y conceptos acorde a tu negocio y
              sus necesidades
              <br />
              <span>y COMENZAMOS</span>
            </h6>
          </GrowStep>
        </div>
        <div>
          <GrowStep
            changeStepSlide={changeStepSlide}
            src={presencia}
            step={step}
          >
            <h6>
              Comience a tener presencia en internet y observe cómo logra
              <br />
              <span>ALCANZAR a millones</span>
            </h6>
          </GrowStep>
        </div>
        <div>
          <GrowStep changeStepSlide={changeStepSlide} src={negocio} step={step}>
            <h6>
              Establezca un negocio organizado y funcional online y observe como
              <br />
              <span>se transforma y crece tu operación</span>
            </h6>
          </GrowStep>
        </div>
        <div>
          <GrowStep changeStepSlide={changeStepSlide} src={empresa} step={step}>
            <h6>
              Tu éxito te convirtió en una empresa, tus necesidades crecieron
              pero
              <br />
              <span>no te preocupes, TE TENEMOS CUBIERTO</span>
            </h6>
          </GrowStep>
        </div>
        <div>
          <GrowStep changeStepSlide={changeStepSlide} src={mas} step={step}>
            <h6>
              Toda tarea repetiva se tiene que automatizar y después
              <br />
              <span>DISFRUTA de tu tiempo extra</span>
            </h6>
          </GrowStep>
        </div>
      </Carousel>
    </React.Fragment>
  );
};

export default HomeCarousel;
