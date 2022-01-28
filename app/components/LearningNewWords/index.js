import React from 'react';
import styled from 'styled-components';
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
`;

const SliderWrapper = styled.div`
  margin: 0 auto;
`;

const slides = [
  {
    id: 1,
    word: 'kawa',
    imgSrc:
      'https://d2pur3iezf4d1j.cloudfront.net/images/6fd84b8a838c43c4a84b44b08b10177e',
  },
  {
    id: 2,
    word: 'herbata',
    imgSrc:
      'https://d2pur3iezf4d1j.cloudfront.net/images/18a521f1507cb86689faa5b2e8277703',
  },
  {
    id: 3,
    word: 'chleb',
    imgSrc:
      'https://d2pur3iezf4d1j.cloudfront.net/images/c61a359a01c01fc19bbe6a21592db53b',
  },
  {
    id: 4,
    word: 'masło',
    imgSrc:
      'https://d2pur3iezf4d1j.cloudfront.net/images/337c00564c4379bdd167fa8598ff48c6',
  },
];

function renderSlides() {
  return slides.map(v => (
    <SwiperSlide key={v.id}>
      <SlideWrapper>
        <SoundImg imgSrc={v.imgSrc} word={v.word} />
      </SlideWrapper>
    </SwiperSlide>
  ));
}

function LearningNewWords() {
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
          {slides.length !== 0 && renderSlides()}
        </Swiper>
      </SliderWrapper>
    </CentralWrapper>
  );
}

export default LearningNewWords;
