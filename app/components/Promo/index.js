import React from 'react';
import styled from 'styled-components';

const PromoWrapper = styled.div`
  width: 100%;
  height: 200px;
  position: relative;

  .Promo__image {
    width: 100%;
    height: 100%;
    background-color: rgb(222, 120, 130);
    background-image: url(https://d1i7tcp6as38tg.cloudfront.net/promo.jpg);
    background-position: 25% 25%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .Promo__blur {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(2px);
  }

  h1 {
    color: rgb(255, 255, 255);
    text-align: center;
    font-size: 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    margin: 0;
  }

  a {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  @media (max-width: 767px) {
    height: 100px;

    h1 {
      font-size: 1rem;
    }
  }
`;

function Promo() {
  return (
    <PromoWrapper>
      <div className="Promo__image" />
      <div className="Promo__blur" />
      <h1>Польский с носителем</h1>
      <a href="https://ru.freepik.com/photos/flower">
        Flower фото создан(а) kroshka__nastya - ru.freepik.com
      </a>
    </PromoWrapper>
  );
}

export default Promo;
