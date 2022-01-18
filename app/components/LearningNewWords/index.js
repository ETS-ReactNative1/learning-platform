import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';
import SoundImg from '../SoundImg';

const SlideWrapper = styled.div`
  background-color: #554da7;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SliderWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

function LearningNewWords() {
  return (
    <SliderWrapper>
      {/* <Pagination /> */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>
          <SlideWrapper>
            <SoundImg />
            <SoundImg />
          </SlideWrapper>
        </SwiperSlide>

        <SwiperSlide>
          <SlideWrapper>
            <SoundImg />
            <SoundImg />
          </SlideWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <SlideWrapper>
            <SoundImg />
            <SoundImg />
          </SlideWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <SlideWrapper>
            <SoundImg />
            <SoundImg />
          </SlideWrapper>
        </SwiperSlide>
      </Swiper>
    </SliderWrapper>
  );
}

export default LearningNewWords;
