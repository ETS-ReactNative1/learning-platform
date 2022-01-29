import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';
import SoundImg from '../SoundImg';
import CentralWrapper from '../CentralWrapper/CentralWrapper';

const SlideWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;

  // @media (max-width: 767px) {
  // }
`;

const SliderWrapper = styled.div`
  margin: 0 auto;
`;

function LearningNewWords({ words }) {
  function renderSlides() {
    return words.map(word => (
      <SwiperSlide key={word.id}>
        <SlideWrapper>
          <SoundImg imgSrc={word.imgSrc} word={word.word} />
        </SlideWrapper>
      </SwiperSlide>
    ));
  }

  const setSlidesQuantity = () => {
    if (window.outerWidth < 768) {
      return 1;
    }

    if (window.outerWidth > 768 && window.outerWidth < 880) {
      return 2;
    }

    return 3;
  };

  const slidesQuantity = setSlidesQuantity();

  return (
    <CentralWrapper>
      <h2>Учим новые слова</h2>
      <SliderWrapper>
        {/* <Pagination /> */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={slidesQuantity}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={swiper => console.log(swiper)}
        >
          {words.length !== 0 && renderSlides()}
        </Swiper>
      </SliderWrapper>
    </CentralWrapper>
  );
}

LearningNewWords.propTypes = {
  words: PropTypes.object,
};

export default LearningNewWords;
