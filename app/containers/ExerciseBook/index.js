import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import CentralWrapper from '../../components/CentralWrapper/CentralWrapper';

const ExerciseBookWrapper = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
  }

  h2 {
    margin: 16px;
    margin-top: 40px;
    text-align: center;
  }

  li {
    list-style: none;
    margin: 16px;

    &:hover i {
      animation: 1s rotate linear infinite;
    }

    &:hover p {
      color: rgb(236, 41, 107);
    }
  }

  .ExerciseBook__link--lesson {
    text-align: center;
    position: relative;
    text-decoration: none;
    color: #000;
    font-weight: 700;

    & p {
      margin: 0;
    }

    & span {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 3px;
      border-radius: 5px;
      color: #fff;
      background-color: rgb(189 155 255);
    }
  }

  .ExerciseBook__img {
    width: 100px;
    height: 100px;
    border: 5px solid rgb(215 208 239);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    & i {
      font-size: 40px;
      color: rgb(26, 2, 103);
    }
  }

  @media (max-width: 767px) {
    // flex-direction: column;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const linksToLessons = [
  {
    id: '1',
    title: 'Start',
    link: '/exercisebook/lesson/start-lesson',
    icon: 'fas fa-flag-checkered',
  },
  { id: '2', title: 'Овощи', link: '/', icon: 'fas fa-carrot' },
  { id: '3', title: 'Время', link: '/', icon: 'far fa-clock' },
];

const ExerciseBook = () => {
  const renderLinksToLessons = () =>
    linksToLessons.map(v => (
      <li key={v.id}>
        <NavLink
          to={v.link}
          className="ExerciseBook__link ExerciseBook__link--lesson"
        >
          <div className="ExerciseBook__img">
            <i className={v.icon} />
          </div>
          <p>{v.title}</p>
        </NavLink>
      </li>
    ));

  return (
    <CentralWrapper>
      <ExerciseBookWrapper>
        <h2>Упражнения по темам</h2>
        <ul> {renderLinksToLessons()}</ul>
      </ExerciseBookWrapper>
    </CentralWrapper>
  );
};

export default ExerciseBook;
