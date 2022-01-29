export const lessonsData = {
  'start-lesson': {
    id: 'startLesson',
    title: 'Стартовый урок',
    exercises: [
      {
        id: 1,
        type: 'alphabet',
      },
      {
        id: 2,
        type: 'wordsslider',
        caption: 'Учим новые слова',
        data: {
          words: [
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
          ],
        },
      },
      {
        id: 3,
        type: 'reading',
        caption: 'Читаем',
        data: {
          texts: [
            { id: 1, caption: 'Jan Brzechwa - Samochwala', text: 'blablba' },
          ],
        },
      },
      {
        id: 4,
        type: 'grammar',
        caption: 'Грамматика',
        data: {
          texts: [
            {
              id: 1,
              word: 'ogurek',
              trainWord: 'og____',
            },
          ],
        },
      },
    ],
  },
};
