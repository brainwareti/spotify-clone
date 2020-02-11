import React, {useEffect, useState} from 'react';

import {Container, ContainerScrollView} from './styles';
import SlideCard from '../../components/SlideCard';
import Mockin from '../../services/mockin';

const Main = () => {
  const [slides, setSlides] = useState([]);

  const onFetchSlides = async () => {
    let response = await Mockin.fetchSlide();

    setSlides(response);
  };

  useEffect(() => {
    onFetchSlides();
  }, []);

  return (
    <Container>
      <ContainerScrollView>
        {slides && slides.map(slide => <SlideCard slide={slide} />)}
      </ContainerScrollView>
    </Container>
  );
};
export default Main;
