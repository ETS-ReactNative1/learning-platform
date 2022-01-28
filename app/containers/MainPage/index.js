import React from 'react';
import styled from 'styled-components';
import A from 'components/A';
import CentralWrapper from '../../components/CentralWrapper/CentralWrapper';

const MainPageWrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 40px;
    text-align: center;
  }

  iframe {
    flex-shrink: 0;
  }

  section {
    display: flex;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 20px;
  }

  .MainPage__greeting {
    padding: 16px;
    padding-top: 0;
    margin-left: 16px;
    max-width: 500px;
    min-width: 400px;
  }

  a i {
    margin: 8px;
  }

  @media (max-width: 767px) {
    padding: 8px;

    section {
      display: flex;
      flex-direction: column;
    }

    iframe {
      width: 100%;
      height: auto;
    }

    .MainPage__greeting {
      min-width: 200px;
      max-width: 100%;
      margin-left: 0;
      padding: 0;
      margin-top: 30px;
      text-align: center;
    }
  }
`;

function MainPage() {
  return (
    <MainPageWrapper>
      <CentralWrapper>
        <h2>Добро пожаловать!</h2>
        <section>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/h2ORdej3sJI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="MainPage__greeting">
            <h3>Друзья!</h3>
            <p>
              В этом видео, мы познакомимся с цветами на польском языке. Но это
              еще не все! На этом сайте вы найдете разные лекции и упражнения
              для прокачивания своих навыков!
            </p>

            <p>
              <i>Еще больше видео на моём Youtube Канале:</i>
            </p>
            <A href="https://www.youtube.com/channel/UCDtQC29FioPUW1L3e1r5OCA/featured">
              <i className="fab fa-youtube" />
              <span>Уроки польского с Аней: учим язык с носителем.</span>
            </A>
          </div>
        </section>
      </CentralWrapper>
    </MainPageWrapper>
  );
}

export default MainPage;
