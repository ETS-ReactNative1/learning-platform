const initialData = {
  words: {
    1: { id: 1, word: 'test1' },
    2: { id: 2, word: 'test2' },
  },
  columns: {
    1: {
      id: 1,
      title: 'Слова',
      wordIds: [1, 2],
    },
    2: {
      id: 2,
      title: 'женский род',
      wordIds: [],
    },
    3: {
      id: 3,
      title: 'мужской род',
      wordIds: [],
    },
    4: {
      id: 4,
      title: 'средний род',
      wordIds: [],
    },
  },
  columnOrder: [1, 2, 3, 4],
};

export default initialData;
