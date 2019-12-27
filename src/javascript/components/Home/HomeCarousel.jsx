import React, { useState } from 'react';

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
  const onChange = currentStep => {
    setStep(currentStep);
  };

  return (
    <Carousel afterChange={onChange} autoplay dotPosition="bottom">
      <div>
        <GrowStep src={idea} step={step} />
      </div>
      <div>
        <GrowStep src={boceto} step={step} />
      </div>
      <div>
        <GrowStep src={presencia} step={step} />
      </div>
      <div>
        <GrowStep src={negocio} step={step} />
      </div>
      <div>
        <GrowStep src={empresa} step={step} />
      </div>
      <div>
        <GrowStep src={mas} step={step} />
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
